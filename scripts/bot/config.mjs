import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT_DIR = path.resolve(__dirname, '../..');
export const DOCS_DIR = path.resolve(ROOT_DIR, 'docs');
export const NOVEDADES_DIR = path.resolve(DOCS_DIR, 'novedades');
export const STATE_FILE = path.resolve(ROOT_DIR, '.bot-state.json');

// Cargar variables de entorno desde .env
export function loadEnv() {
  const envPath = path.resolve(ROOT_DIR, '.env');
  if (!fs.existsSync(envPath)) {
    return;
  }

  const content = fs.readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}

loadEnv();

export const config = {
  gitUser: process.env.GIT_USER || 'oauth2',
  gitToken: process.env.GIT_TOKEN || '',
  gitRepo: process.env.GIT_REPO || 'https://git.buho.la/facturaloperu/facturador/Pro9',
  gitlabApiBase: process.env.GITLAB_API_BASE || 'https://git.buho.la/api/v4',
  projectId: process.env.GITLAB_PROJECT_ID || '102',
  projectPath: 'facturaloperu/facturador/Pro9',
  
  // AI Config
  geminiApiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  aiBaseUrl: process.env.AI_BASE_URL || '',
  aiModel: process.env.AI_MODEL || (process.env.GEMINI_API_KEY ? 'gemini-2.0-flash' : 'gpt-4o-mini'),
  aiProvider: process.env.AI_PROVIDER || (
    process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY ? 'gemini' :
    process.env.OPENAI_API_KEY ? 'openai' : 'rules'
  ),

  // Git / Doc config
  docsRemote: process.env.DOCS_REMOTE || 'origin',
  docsBranch: process.env.DOCS_BRANCH || 'main',
};
