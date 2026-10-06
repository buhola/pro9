#!/usr/bin/env node

import { config } from './config.mjs';
import { readState, saveState } from './state.mjs';
import { fetchAllCommitsSince, fetchCommitDiff } from './gitlab.mjs';
import { evaluateCommit } from './filter.mjs';
import { explainCommitsWithAI } from './ai.mjs';
import {
  parseDate,
  updateCronologiaDoc,
  updateDestacadosDoc,
  updateIndexDoc,
  updateModuleDocs,
} from './doc-updater.mjs';
import { buildProject, commitDocs, pushDocs, deployDocs } from './git-ops.mjs';
import { normalizeModuleKey, VALID_SLUGS } from './rules.mjs';

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    since: null,
    until: null,
    dryRun: false,
    build: false,
    commit: false,
    push: false,
    deploy: false,
    force: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--since' && args[i + 1]) {
      options.since = args[++i];
    } else if (arg === '--until' && args[i + 1]) {
      options.until = args[++i];
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--build') {
      options.build = true;
    } else if (arg === '--commit') {
      options.commit = true;
    } else if (arg === '--push') {
      options.push = true;
    } else if (arg === '--deploy') {
      options.deploy = true;
    } else if (arg === '--force') {
      options.force = true;
    } else if (arg === '--all') {
      options.build = true;
      options.commit = true;
      options.push = true;
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
  }

  return options;
}

function printHelp() {
  console.log(`
🤖 Bot de Actualización de Novedades - Facturador Pro 9

Uso:
  pnpm bot [opciones]
  node scripts/bot/cli.mjs [opciones]

Opciones:
  --since <fecha>     Fecha inicial (ej: 2026-08-25). Si se omite, usa la del último commit sincronizado.
  --until <fecha>     Fecha final opcional (ej: 2026-10-05).
  --dry-run           Modo prueba: analiza y muestra qué cambios se generarían sin escribir archivos.
  --build             Ejecuta 'pnpm build' tras actualizar para verificar sintaxis y enlaces.
  --commit            Crea un commit de git con el resumen de novedades agregadas.
  --push              Sube los cambios a GitHub (origin/main).
  --deploy            Ejecuta 'pnpm deploy' a GitHub Pages.
  --all               Ejecuta el ciclo completo: sync + build + commit + push.
  --force             Reprocesa commits incluso si ya fueron marcados como sincronizados.
  --help, -h          Muestra esta ayuda.
`);
}

async function main() {
  const options = parseArgs();
  console.log('====================================================');
  console.log('🤖 INICIANDO BOT DE NOVEDADES PRO 9');
  console.log('====================================================');

  const state = readState();
  const sinceDate = options.since || state.lastCommitDate || '2026-08-25T18:10:00.000-05:00';
  console.log(`📌 Repositorio origen: ${config.gitRepo}`);
  console.log(`📅 Buscando commits desde: ${sinceDate}`);
  if (options.until) console.log(`📅 Hasta: ${options.until}`);
  console.log(`🧠 Modo IA: ${config.aiProvider.toUpperCase()}`);

  // 1. Obtener commits desde GitLab
  console.log('\n📡 Consultando API de GitLab...');
  const commits = await fetchAllCommitsSince({
    since: sinceDate,
    until: options.until,
  });

  console.log(`📥 Total de commits recibidos: ${commits.length}`);
  if (commits.length === 0) {
    console.log('✨ No hay nuevos commits en el rango especificado. Todo está al día.');
    return;
  }

  // 2. Filtrar commits no deseados (merges, assets, chores)
  console.log('\n🔍 Analizando y filtrando commits (descartando merges y builds de assets)...');
  const processedSet = new Set(options.force ? [] : state.processedCommits || []);

  // Pre-filtrado rápido por título y merges
  const candidateCommits = commits.filter((c) => {
    if (processedSet.has(c.id)) return false;
    const preEval = evaluateCommit(c);
    return preEval.keep;
  });

  console.log(`⚡ Commits pre-seleccionados para análisis de diffs: ${candidateCommits.length}`);

  // Función concurrente para obtener diffs en lotes
  const CONCURRENCY = 12;
  const validCommits = [];
  let evaluatedCount = 0;

  for (let i = 0; i < candidateCommits.length; i += CONCURRENCY) {
    const chunk = candidateCommits.slice(i, i + CONCURRENCY);
    const diffs = await Promise.all(chunk.map((c) => fetchCommitDiff(c.id)));

    for (let j = 0; j < chunk.length; j++) {
      const commit = chunk[j];
      const diff = diffs[j];
      const fullEval = evaluateCommit(commit, diff);
      if (fullEval.keep) {
        validCommits.push({
          ...commit,
          sourceFiles: fullEval.sourceFiles || [],
        });
      }
    }

    evaluatedCount += chunk.length;
    process.stdout.write(`\r⏳ Progreso análisis: ${evaluatedCount}/${candidateCommits.length} commits...`);
  }
  console.log('');

  console.log(`🎯 Commits útiles identificados: ${validCommits.length} (de ${commits.length} totales)`);
  if (validCommits.length === 0) {
    console.log('✨ No hay nuevas novedades para documentar.');
    return;
  }

  // 3. Transformar a notas de versión para usuario final (con IA o reglas)
  console.log('\n✍️ Generando descripciones para el usuario final...');
  const analyzedItems = await explainCommitsWithAI(validCommits);

  // Agrupar por fecha
  const itemsByDate = {};
  for (const item of analyzedItems) {
    const dateKey = item.date.slice(0, 10);
    if (!itemsByDate[dateKey]) {
      itemsByDate[dateKey] = [];
    }
    itemsByDate[dateKey].push(item);
  }

  const latestCommit = validCommits[validCommits.length - 1];
  const lastDateInfo = parseDate(latestCommit.created_at);
  const newTotalChanges = (state.totalChanges || 546) + validCommits.length;

  console.log(`\n📊 Resumen de cambios detectados:`);
  console.log(`- Nuevos cambios procesados: ${validCommits.length}`);
  console.log(`- Total acumulado de cambios: ${newTotalChanges}`);
  console.log(`- Rango cubierto: 29 de junio – ${lastDateInfo.fullSpanish}`);
  console.log(`- Días con entregas: ${Object.keys(itemsByDate).length}`);

  if (options.dryRun) {
    console.log('\n🔎 MODO DRY-RUN: Vista previa de cambios generados:');
    for (const [d, items] of Object.entries(itemsByDate)) {
      console.log(`\n📅 ${d} (${items.length} entregas):`);
      for (const it of items) {
        console.log(`  [${it.moduleKey}] ${it.userDescription}`);
      }
    }
    console.log('\n✨ Simulación finalizada. No se modificó ningún archivo.');
    return;
  }

  // 4. Actualizar archivos markdown
  console.log('\n📝 Actualizando archivos de documentación...');

  // Actualizar módulos
  updateModuleDocs(analyzedItems);
  console.log('  ✅ Módulos actualizados (docs/novedades/*/*.md)');

  // Actualizar cronología
  updateCronologiaDoc(itemsByDate, {
    endDateFormatted: lastDateInfo.numericDate,
  });
  console.log('  ✅ Línea de tiempo actualizada (docs/novedades/cronologia.md)');

  // Actualizar destacados
  const majorItems = analyzedItems
    .filter((it) => it.isMajor)
    .slice(0, 6)
    .map((it) => {
      const normalizedKey = normalizeModuleKey(it.moduleKey);
      const slug = VALID_SLUGS[normalizedKey] || '/novedades';
      return {
        title: it.shortDelivery,
        linkText: it.shortDelivery,
        link: slug,
        description: it.userDescription.replace(/^\*\*[^*]+\*\*:\s*/, ''),
      };
    });

  updateDestacadosDoc({
    startDateStr: '29 de junio',
    endDateStr: lastDateInfo.fullSpanish,
    totalChanges: newTotalChanges,
    newMajorItems: majorItems,
  });
  console.log('  ✅ Lo más destacado actualizado (docs/novedades/destacados.md)');

  // Actualizar resumen (index.md)
  updateIndexDoc({
    startDateStr: '29 de junio',
    endDateStr: lastDateInfo.fullSpanish,
    totalChanges: newTotalChanges,
  });
  console.log('  ✅ Resumen principal actualizado (docs/novedades/index.md)');

  // 5. Guardar estado
  const updatedProcessedCommits = [
    ...(state.processedCommits || []),
    ...validCommits.map((c) => c.id),
  ];

  saveState({
    lastCommitHash: latestCommit.id,
    lastCommitDate: latestCommit.created_at,
    lastSyncDate: new Date().toISOString(),
    totalChanges: newTotalChanges,
    processedCommits: updatedProcessedCommits,
  });
  console.log('  ✅ Estado guardado en .bot-state.json');

  // 6. Acciones opcionales: build, commit, push, deploy
  if (options.build) {
    buildProject();
  }

  if (options.commit) {
    const commitMsg = `docs: actualizar novedades de Pro 9 al ${lastDateInfo.fullSpanish} (${validCommits.length} cambios)`;
    commitDocs(commitMsg);
  }

  if (options.push) {
    pushDocs();
  }

  if (options.deploy) {
    deployDocs();
  }

  console.log('\n🎉 ¡PROCESO DE ACTUALIZACIÓN COMPLETADO CON ÉXITO!');
}

main().catch((err) => {
  console.error('\n❌ ERROR FATAL:', err.message);
  process.exit(1);
});
