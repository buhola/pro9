import fs from 'node:fs';
import path from 'node:path';
import { NOVEDADES_DIR } from './config.mjs';
import { normalizeModuleKey } from './rules.mjs';

const MONTH_NAMES = {
  '01': { short: 'ene', long: 'Enero' },
  '02': { short: 'feb', long: 'Febrero' },
  '03': { short: 'mar', long: 'Marzo' },
  '04': { short: 'abr', long: 'Abril' },
  '05': { short: 'may', long: 'Mayo' },
  '06': { short: 'jun', long: 'Junio' },
  '07': { short: 'jul', long: 'Julio' },
  '08': { short: 'ago', long: 'Agosto' },
  '09': { short: 'sep', long: 'Septiembre' },
  '10': { short: 'oct', long: 'Octubre' },
  '11': { short: 'nov', long: 'Noviembre' },
  '12': { short: 'dic', long: 'Diciembre' },
};

export function parseDate(isoString) {
  const yyyy = isoString.slice(0, 4);
  const mm = isoString.slice(5, 7);
  const dd = String(parseInt(isoString.slice(8, 10), 10)); // sin cero adelante para cronología ej '5 oct'
  const info = MONTH_NAMES[mm] || { short: mm, long: mm };
  return {
    year: yyyy,
    monthNumber: mm,
    monthShort: info.short,
    monthLong: info.long,
    day: dd,
    dateKey: `${yyyy}-${mm}-${isoString.slice(8, 10)}`,
    displayDate: `${dd} ${info.short}`,
    fullSpanish: `${dd} de ${info.long.toLowerCase()} de ${yyyy}`,
    numericDate: `${dd.padStart(2, '0')}/${mm}/${yyyy}`,
  };
}

export function updateIndexDoc({ startDateStr = '29 de junio', endDateStr, totalChanges }) {
  const filePath = path.resolve(NOVEDADES_DIR, 'index.md');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Actualizar frontmatter description
  content = content.replace(
    /description:\s*["'][^"']+["']/,
    `description: "Todo lo nuevo y lo mejorado entre el ${startDateStr} y el ${endDateStr}: ${totalChanges} cambios publicados."`
  );

  // Actualizar :::info[Periodo]
  const periodRegex = /:::info\[Periodo\][\s\S]*?:::/;
  const newCallout = `:::info[Periodo]\n**${startDateStr} – ${endDateStr}** · **${totalChanges}** cambios publicados.\n:::`;
  content = content.replace(periodRegex, newCallout);

  fs.writeFileSync(filePath, content, 'utf-8');
}

export function updateDestacadosDoc({ startDateStr = '29 de junio', endDateStr, totalChanges, newMajorItems = [] }) {
  const filePath = path.resolve(NOVEDADES_DIR, 'destacados.md');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Actualizar periodo cubierto
  const periodRegex = /:::tip\[Periodo cubierto\][\s\S]*?:::/;
  const newCallout = `:::tip[Periodo cubierto]\n**${startDateStr} – ${endDateStr}** · **${totalChanges}** cambios publicados en el desarrollo de Pro 9.\n:::`;
  content = content.replace(periodRegex, newCallout);

  // Si hay nuevos ítems destacados mayores, agregarlos a la tabla si no están ya
  if (newMajorItems.length > 0) {
    const tableEndRegex = /(\|.*\|\n)(\s*---\s*)/;
    let addedRows = '';
    for (const item of newMajorItems) {
      if (!content.includes(item.linkText)) {
        addedRows += `| [**${item.title}**](${item.link}) | ${item.description} |\n`;
      }
    }
    if (addedRows && tableEndRegex.test(content)) {
      content = content.replace(tableEndRegex, `$1${addedRows}$2`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

const SPANISH_MONTH_MAP = {
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, setiembre: 9, octubre: 10, noviembre: 11, diciembre: 12
};

export function updateCronologiaDoc(itemsByDate = {}, { endDateFormatted } = {}) {
  const filePath = path.resolve(NOVEDADES_DIR, 'cronologia.md');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Separar cabecera y pie de página
  const firstHeadingIdx = content.indexOf('### ');
  const footerIdx = content.lastIndexOf('---');

  let header = firstHeadingIdx !== -1 ? content.slice(0, firstHeadingIdx) : content;
  let footer = footerIdx !== -1 ? content.slice(footerIdx) : '';
  let body = firstHeadingIdx !== -1 && footerIdx !== -1 ? content.slice(firstHeadingIdx, footerIdx) : '';

  // Actualizar texto introductorio en el header
  header = header.replace(
    /Las entregas más importantes, en el orden en que salieron\./,
    'Las entregas más importantes, ordenadas de la más reciente a la más antigua.'
  );

  // Extraer secciones existentes
  const sectionsMap = new Map();
  const rawSections = body.split(/(?=### )/).map((s) => s.trim()).filter(Boolean);

  for (const sec of rawSections) {
    const match = sec.match(/^###\s+([A-Za-záéíóúñ]+)\s+(\d{4})/i);
    if (!match) continue;
    const monthName = match[1];
    const year = parseInt(match[2], 10);
    const monthNum = SPANISH_MONTH_MAP[monthName.toLowerCase()] || 0;
    const sortKey = year * 100 + monthNum;

    const rowsByDay = new Map();
    const rowRegex = /\|\s*(\d+)\s+([a-záéíóúñ]+)\s*\|\s*([^|\n]+)\s*\|/gi;
    let rMatch;
    while ((rMatch = rowRegex.exec(sec)) !== null) {
      const dayNum = parseInt(rMatch[1], 10);
      rowsByDay.set(dayNum, {
        dayNum,
        displayDate: `${rMatch[1]} ${rMatch[2]}`,
        text: rMatch[3].trim(),
      });
    }

    sectionsMap.set(sortKey, {
      heading: `### ${monthName} ${year}`,
      monthName,
      year,
      sortKey,
      rowsByDay,
    });
  }

  // Agrupar e incorporar nuevos items si fueron provistos
  for (const [dateKey, items] of Object.entries(itemsByDate)) {
    if (!items || items.length === 0) continue;
    const dInfo = parseDate(items[0].date);
    const monthNum = SPANISH_MONTH_MAP[dInfo.monthLong.toLowerCase()] || 0;
    const year = parseInt(dInfo.year, 10);
    const sortKey = year * 100 + monthNum;
    const dayNumber = parseInt(dInfo.day, 10);

    if (!sectionsMap.has(sortKey)) {
      sectionsMap.set(sortKey, {
        heading: `### ${dInfo.monthLong} ${dInfo.year}`,
        monthName: dInfo.monthLong,
        year,
        sortKey,
        rowsByDay: new Map(),
      });
    }

    const sec = sectionsMap.get(sortKey);
    const deliveryText = items
      .map((it) => (it.isMajor ? `🚀 **${it.shortDelivery}**` : it.shortDelivery))
      .join(' · ');

    if (sec.rowsByDay.has(dayNumber)) {
      const current = sec.rowsByDay.get(dayNumber);
      if (!current.text.includes(items[0]?.shortDelivery?.slice(0, 15) || '')) {
        sec.rowsByDay.set(dayNumber, {
          dayNum: dayNumber,
          displayDate: dInfo.displayDate,
          text: `${deliveryText} · ${current.text}`,
        });
      }
    } else {
      sec.rowsByDay.set(dayNumber, {
        dayNum: dayNumber,
        displayDate: dInfo.displayDate,
        text: deliveryText,
      });
    }
  }

  // Ordenar secciones de mes de más reciente a más antigua (descendente)
  const sortedSections = Array.from(sectionsMap.values()).sort((a, b) => b.sortKey - a.sortKey);

  // Reconstruir el cuerpo
  let newBody = '\n';
  for (const sec of sortedSections) {
    newBody += `${sec.heading}\n\n| Fecha | Entrega |\n|---|---|\n`;
    // Ordenar días de más reciente a más antiguo (descendente)
    const sortedDays = Array.from(sec.rowsByDay.values()).sort((a, b) => b.dayNum - a.dayNum);
    for (const d of sortedDays) {
      newBody += `| ${d.displayDate} | ${d.text} |\n`;
    }
    newBody += '\n';
  }

  // Actualizar nota de pie de página
  if (endDateFormatted) {
    footer = footer.replace(
      /\*Documento generado a partir del historial completo del repositorio Pro 9 \(29\/06\/2026 – [^)]+\)\.\*/,
      `*Documento generado a partir del historial completo del repositorio Pro 9 (29/06/2026 – ${endDateFormatted}).*`
    );
  }

  content = header.trimEnd() + '\n' + newBody + footer.trimStart();
  fs.writeFileSync(filePath, content, 'utf-8');
}

export function updateModuleDocs(items) {
  const itemsByModule = {};
  for (const item of items) {
    if (!item.moduleKey) continue;
    const normalizedKey = normalizeModuleKey(item.moduleKey);
    if (!itemsByModule[normalizedKey]) {
      itemsByModule[normalizedKey] = [];
    }
    itemsByModule[normalizedKey].push(item);
  }

  for (const [moduleKey, moduleItems] of Object.entries(itemsByModule)) {
    const fullPath = path.resolve(NOVEDADES_DIR, moduleKey);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[DocUpdater] Archivo de módulo no encontrado: ${moduleKey}`);
      continue;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');
    let addedCount = 0;

    for (const item of moduleItems) {
      // Comprobar si ya existe una viñeta similar para evitar duplicados
      const keyWords = item.userDescription.slice(0, 30).toLowerCase();
      if (content.toLowerCase().includes(keyWords)) {
        continue;
      }

      const bullet = `- ${item.userDescription}\n`;

      // Insertar antes de '---' final si existe
      const dividerIndex = content.lastIndexOf('---');
      if (dividerIndex > 20) {
        // Encontrar salto de línea previo a ---
        content = content.slice(0, dividerIndex) + bullet + content.slice(dividerIndex);
      } else {
        content += bullet;
      }
      addedCount++;
    }

    if (addedCount > 0) {
      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}
