import { execSync } from 'node:child_process';
import { ROOT_DIR, config } from './config.mjs';

export function runCommand(cmd, options = {}) {
  try {
    const stdout = execSync(cmd, {
      cwd: ROOT_DIR,
      encoding: 'utf-8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    });
    return { success: true, stdout };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      stdout: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : '',
    };
  }
}

export function buildProject() {
  console.log('\n🔨 [Build] Compilando el proyecto Docusaurus para verificar enlaces y sintaxis...');
  const res = runCommand('pnpm build');
  if (!res.success) {
    throw new Error(`Error en la compilación de Docusaurus: ${res.error}`);
  }
  console.log('✅ [Build] Proyecto compilado exitosamente.');
  return true;
}

export function commitDocs(commitMessage) {
  console.log(`\n📦 [Git] Agregando archivos modificados a git...`);
  runCommand('git add docs/ .bot-state.json');

  const statusRes = runCommand('git status --porcelain', { silent: true });
  if (!statusRes.stdout || statusRes.stdout.trim().length === 0) {
    console.log('ℹ️ [Git] No hay cambios pendientes por commitear.');
    return false;
  }

  const res = runCommand(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);
  if (!res.success) {
    console.warn(`[Git] Advertencia al hacer commit:`, res.stderr || res.error);
    return false;
  }
  console.log(`✅ [Git] Commit realizado con éxito: "${commitMessage}"`);
  return true;
}

export function pushDocs(remote = config.docsRemote, branch = config.docsBranch) {
  console.log(`\n🚀 [Git] Subiendo cambios a ${remote}/${branch}...`);
  let pushCmd = `git push ${remote} ${branch}`;
  let options = {};
  const ghUser = config.githubUser || process.env.GITHUB_USER;
  const ghToken = config.githubToken || process.env.GITHUB_TOKEN;
  if (ghUser && ghToken && remote === 'origin') {
    pushCmd = `git push "https://${ghUser}:${ghToken}@github.com/buhola/pro9.git" ${branch}:${branch}`;
    options = { silent: true };
  }
  const res = runCommand(pushCmd, options);
  if (!res.success) {
    throw new Error(`Error al hacer push a ${remote}/${branch}: ${res.stderr || res.error}`);
  }
  if (ghUser && ghToken && remote === 'origin') {
    runCommand(`git update-ref refs/remotes/${remote}/${branch} HEAD`, { silent: true });
  }
  console.log(`✅ [Git] Push completado exitosamente.`);
  return true;
}

export function deployDocs() {
  console.log(`\n🌐 [Deploy] Ejecutando deploy a GitHub Pages (pnpm deploy)...`);
  const deployEnv = {
    ...process.env,
    GIT_USER: config.githubUser || process.env.GITHUB_USER || process.env.GIT_USER,
    GIT_PASS: config.githubToken || process.env.GITHUB_TOKEN || process.env.GIT_PASS,
  };
  const res = runCommand('pnpm deploy', { env: deployEnv });
  if (!res.success) {
    throw new Error(`Error en el deploy: ${res.stderr || res.error}`);
  }
  console.log(`✅ [Deploy] Despliegue completado exitosamente.`);
  return true;
}


