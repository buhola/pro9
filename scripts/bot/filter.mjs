/**
 * Módulo de filtrado de commits
 * Descarta automáticamente merges, builds, assets compilados, lockfiles y cambios triviales sin impacto en usuario final.
 */

const ASSET_PATH_PATTERNS = [
  /^public\/build\//,
  /^public\/dist\//,
  /^public\/mix-manifest\.json$/,
  /^public\/assets\//,
  /\.map$/,
  /^pnpm-lock\.yaml$/,
  /^package-lock\.json$/,
  /^composer\.lock$/,
  /^\.gitignore$/,
];

const IGNORE_TITLE_PATTERNS = [
  /^merge\b/i,
  /^fix:\s*assets\s*compilados/i,
  /^compilando\s*assets/i,
  /^assets\s*build/i,
  /^fix:\s*compilacion/i,
  /^fix\s*build/i,
  /^chore:\s*update file permissions/i,
  /^chore\(deps\)/i,
  /^wip\b/i,
];

export function isMergeCommit(commit) {
  if (commit.parent_ids && commit.parent_ids.length > 1) {
    return true;
  }
  return /^merge\s+/i.test(commit.title || '');
}

export function shouldIgnoreCommitByTitle(title) {
  const cleanTitle = (title || '').trim();
  for (const pattern of IGNORE_TITLE_PATTERNS) {
    if (pattern.test(cleanTitle)) {
      return true;
    }
  }
  return false;
}

export function filterCommitDiff(diffList = []) {
  if (!diffList || diffList.length === 0) {
    return { isAssetOnly: false, sourceFiles: [] };
  }

  const sourceFiles = [];
  let allAreAssets = true;

  for (const item of diffList) {
    const filePath = item.new_path || item.old_path || '';
    const isAsset = ASSET_PATH_PATTERNS.some((pattern) => pattern.test(filePath));

    if (!isAsset) {
      allAreAssets = false;
      sourceFiles.push(filePath);
    }
  }

  return {
    isAssetOnly: allAreAssets,
    sourceFiles,
  };
}

export function evaluateCommit(commit, diffList = []) {
  if (isMergeCommit(commit)) {
    return { keep: false, reason: 'Merge commit' };
  }

  if (shouldIgnoreCommitByTitle(commit.title)) {
    return { keep: false, reason: 'Título de build/assets/chore ignorado' };
  }

  const { isAssetOnly, sourceFiles } = filterCommitDiff(diffList);
  if (isAssetOnly && diffList.length > 0) {
    return { keep: false, reason: 'Solo modifica assets compilados o lockfiles' };
  }

  return { keep: true, sourceFiles };
}
