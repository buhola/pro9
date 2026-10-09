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

export function updateCronologiaDoc(
  itemsByDate = {},
  { endDateFormatted, totalChanges, startDateStr = '29 de junio de 2026', endDateStr } = {}
) {
  const filePath = path.resolve(NOVEDADES_DIR, 'cronologia.md');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Actualizar contador en changelog-meta si se especificó totalChanges y endDateStr
  if (totalChanges && endDateStr) {
    const metaRegex = /<span>Con <strong>\d+ actualizaciones<\/strong> desde <strong>[^<]+<\/strong>\.<\/span>/;
    if (metaRegex.test(content)) {
      content = content.replace(
        metaRegex,
        `<span>Con <strong>${totalChanges} actualizaciones</strong> desde <strong>${startDateStr} → ${endDateStr}</strong>.</span>`
      );
    }
  }

  const metaEndTag = '</div>\n</div>';
  const metaEndIdx = content.indexOf(metaEndTag);
  if (metaEndIdx === -1) return;

  const header = content.slice(0, metaEndIdx + metaEndTag.length);
  const footerIdx = content.lastIndexOf('</div>\n\n---');
  const footer =
    footerIdx !== -1
      ? content.slice(footerIdx + '</div>\n\n'.length)
      : '---\n\n*Registro de cambios generado a partir del historial completo de entregas de Facturador Pro 9.*\n';

  const body = content.slice(metaEndIdx + metaEndTag.length, footerIdx !== -1 ? footerIdx : content.length);

  // Extraer bloques existentes
  const blockRegex = /<div className="release-block" id="([^"]+)">([\s\S]*?)<\/ul>\s*<\/div>/g;
  let m;
  const blockMap = new Map();
  while ((m = blockRegex.exec(body)) !== null) {
    blockMap.set(m[1], {
      id: m[1],
      html: m[0].trim(),
    });
  }

  // Incorporar nuevos items
  const weightMap = { new: 1, tweak: 2, fix: 3 };

  for (const [dateKey, items] of Object.entries(itemsByDate)) {
    if (!items || items.length === 0) continue;

    const dInfo = parseDate(items[0].date);
    const dateId = dInfo.dateKey;
    const fullDate = `${dInfo.day} de ${dInfo.monthLong.toLowerCase()} de ${dInfo.year}`;
    const displayDate = `${dInfo.displayDate} ${dInfo.year}`;

    const sortedItems = [...items].sort((a, b) => (weightMap[a.type] || 2) - (weightMap[b.type] || 2));

    if (blockMap.has(dateId)) {
      let currentHtml = blockMap.get(dateId).html;
      let newItemsHtml = '';
      for (const it of sortedItems) {
        const text = it.isMajor ? `<strong>${it.shortDelivery}</strong>` : it.shortDelivery;
        if (!currentHtml.includes(it.shortDelivery)) {
          newItemsHtml += `    <li className="changelog-item">\n      <span className="badge-changelog ${it.badgeClass || 'badge-tweak'}" title="${it.typeTitle || 'Mejora'}"></span>\n      <div>${text}</div>\n    </li>\n`;
        }
      }
      if (newItemsHtml) {
        currentHtml = currentHtml.replace('</ul>', `${newItemsHtml}  </ul>`);
        blockMap.set(dateId, { id: dateId, html: currentHtml });
      }
    } else {
      let newBlock = `<div className="release-block" id="${dateId}">\n`;
      newBlock += `  <div className="release-block-header">\n`;
      newBlock += `    <span className="release-block-title">Actualización del ${fullDate}</span>\n`;
      newBlock += `    <span className="release-block-date">${displayDate}</span>\n`;
      newBlock += `  </div>\n\n`;
      newBlock += `  <ul className="changelog-list">\n`;
      for (const it of sortedItems) {
        const text = it.isMajor ? `<strong>${it.shortDelivery}</strong>` : it.shortDelivery;
        newBlock += `    <li className="changelog-item">\n`;
        newBlock += `      <span className="badge-changelog ${it.badgeClass || 'badge-tweak'}" title="${it.typeTitle || 'Mejora'}"></span>\n`;
        newBlock += `      <div>${text}</div>\n`;
        newBlock += `    </li>\n`;
      }
      newBlock += `  </ul>\n</div>`;
      blockMap.set(dateId, { id: dateId, html: newBlock });
    }
  }

  // Ordenar TODOS los bloques estrictamente de más reciente a más antiguo (descendente por fecha)
  const sortedBlocks = Array.from(blockMap.values()).sort((a, b) => b.id.localeCompare(a.id));

  const newContent =
    header.trimEnd() +
    '\n\n' +
    sortedBlocks.map((b) => b.html).join('\n\n') +
    '\n\n</div>\n\n' +
    footer.trim() +
    '\n';

  fs.writeFileSync(filePath, newContent, 'utf-8');
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
