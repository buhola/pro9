import fs from 'node:fs';
import { STATE_FILE, NOVEDADES_DIR } from './config.mjs';

export function readState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
      return data;
    } catch (e) {
      console.warn(`[State] Error leyendo ${STATE_FILE}, recalculando estado inicial:`, e.message);
    }
  }

  // Si no existe, detectar desde docs/novedades/index.md
  const defaultState = {
    lastCommitHash: '8cedf828',
    lastCommitDate: '2026-08-25T18:10:00.000-05:00',
    lastSyncDate: null,
    totalChanges: 546,
    processedCommits: []
  };

  const indexPath = `${NOVEDADES_DIR}/index.md`;
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf-8');
    const matchChanges = content.match(/·\s*\*\*(\d+)\*\*\s*cambios publicados/i);
    if (matchChanges) {
      defaultState.totalChanges = parseInt(matchChanges[1], 10);
    }
  }

  return defaultState;
}

export function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}
