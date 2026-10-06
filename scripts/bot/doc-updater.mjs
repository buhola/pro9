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

export function updateCronologiaDoc(itemsByDate, { endDateFormatted }) {
  const filePath = path.resolve(NOVEDADES_DIR, 'cronologia.md');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Agrupar itemsByDate por Mes Año (ej: "Agosto 2026", "Septiembre 2026", "Octubre 2026")
  const groupedByMonth = {};
  for (const [dateKey, items] of Object.entries(itemsByDate)) {
    const dInfo = parseDate(items[0].date);
    const monthHeading = `### ${dInfo.monthLong} ${dInfo.year}`;
    if (!groupedByMonth[monthHeading]) {
      groupedByMonth[monthHeading] = [];
    }
    groupedByMonth[monthHeading].push({
      displayDate: dInfo.displayDate,
      dayNumber: parseInt(dInfo.day, 10),
      items,
    });
  }

  for (const [monthHeading, days] of Object.entries(groupedByMonth)) {
    if (content.includes(monthHeading)) {
      // Mes existente: extraer filas existentes, combinar con las nuevas y ordenar por número de día
      const monthIndex = content.indexOf(monthHeading);
      const nextHeadingIndex = content.indexOf('### ', monthIndex + monthHeading.length);
      const searchLimit = nextHeadingIndex !== -1 ? nextHeadingIndex : content.lastIndexOf('---');
      const sectionText = content.slice(monthIndex, searchLimit);

      // Extraer filas actuales
      const rowsByDay = new Map();
      const rowRegex = /\|\s*(\d+)\s+([a-z]+)\s*\|\s*([^|\n]+)\s*\|/gi;
      let match;
      while ((match = rowRegex.exec(sectionText)) !== null) {
        const dayNum = parseInt(match[1], 10);
        const dayText = `${match[1]} ${match[2]}`;
        const delivery = match[3].trim();
        rowsByDay.set(dayNum, { displayDate: dayText, text: delivery });
      }

      // Agregar o actualizar con los nuevos días
      for (const day of days) {
        const deliveryText = day.items
          .map((it) => (it.isMajor ? `🚀 **${it.shortDelivery}**` : it.shortDelivery))
          .join(' · ');

        if (rowsByDay.has(day.dayNumber)) {
          // Si ya existe el día, verificar si ya incluye este delivery
          const current = rowsByDay.get(day.dayNumber);
          if (!current.text.includes(day.items[0]?.shortDelivery?.slice(0, 15) || '')) {
            rowsByDay.set(day.dayNumber, {
              displayDate: day.displayDate,
              text: `${current.text} · ${deliveryText}`,
            });
          }
        } else {
          rowsByDay.set(day.dayNumber, {
            displayDate: day.displayDate,
            text: deliveryText,
          });
        }
      }

      // Reconstruir tabla ordenada por día
      const sortedDays = Array.from(rowsByDay.keys()).sort((a, b) => a - b);
      let newTable = `${monthHeading}\n\n| Fecha | Entrega |\n|---|---|\n`;
      for (const d of sortedDays) {
        const r = rowsByDay.get(d);
        newTable += `| ${r.displayDate} | ${r.text} |\n`;
      }
      newTable += '\n';

      content = content.slice(0, monthIndex) + newTable + content.slice(searchLimit);
    } else {
      // Mes nuevo: crear sección completa ordenada por día
      days.sort((a, b) => a.dayNumber - b.dayNumber);
      let newSection = `\n${monthHeading}\n\n| Fecha | Entrega |\n|---|---|\n`;
      for (const day of days) {
        const deliveryText = day.items
          .map((it) => (it.isMajor ? `🚀 **${it.shortDelivery}**` : it.shortDelivery))
          .join(' · ');
        newSection += `| ${day.displayDate} | ${deliveryText} |\n`;
      }

      const footerIndex = content.lastIndexOf('---');
      if (footerIndex !== -1) {
        content = content.slice(0, footerIndex) + newSection + '\n' + content.slice(footerIndex);
      } else {
        content += '\n' + newSection;
      }
    }
  }

  // Actualizar nota de pie de página
  if (endDateFormatted) {
    content = content.replace(
      /\*Documento generado a partir del historial completo del repositorio Pro 9 \(29\/06\/2026 – [^)]+\)\.\*/,
      `*Documento generado a partir del historial completo del repositorio Pro 9 (29/06/2026 – ${endDateFormatted}).*`
    );
  }

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
