import { config } from './config.mjs';

export async function gitlabRequest(endpoint, params = {}) {
  const url = new URL(`${config.gitlabApiBase}${endpoint}`);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, String(value));
    }
  }

  const headers = {
    'Accept': 'application/json',
  };
  if (config.gitToken) {
    headers['PRIVATE-TOKEN'] = config.gitToken;
  }

  let retries = 3;
  while (retries > 0) {
    try {
      const res = await fetch(url.toString(), { headers });
      if (!res.ok) {
        if (res.status === 429 || res.status >= 500) {
          retries--;
          await new Promise((r) => setTimeout(r, 1500));
          continue;
        }
        throw new Error(`GitLab API error: ${res.status} ${res.statusText} on ${url}`);
      }
      const data = await res.json();
      const nextPage = res.headers.get('x-next-page');
      return { data, nextPage: nextPage ? parseInt(nextPage, 10) : null };
    } catch (err) {
      retries--;
      if (retries === 0) throw err;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}

export async function fetchAllCommitsSince({ since, until, ref = 'main' }) {
  const allCommits = [];
  let page = 1;

  while (true) {
    const params = {
      ref_name: ref,
      since: since ? new Date(since).toISOString() : undefined,
      until: until ? new Date(until).toISOString() : undefined,
      per_page: 100,
      page,
    };

    const { data, nextPage } = await gitlabRequest(
      `/projects/${config.projectId}/repository/commits`,
      params
    );

    if (!data || data.length === 0) break;
    allCommits.push(...data);

    if (!nextPage) break;
    page = nextPage;
  }

  // Ordenar de más antiguo a más reciente para procesar en orden cronológico
  allCommits.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return allCommits;
}

export async function fetchCommitDiff(commitSha) {
  try {
    const { data } = await gitlabRequest(
      `/projects/${config.projectId}/repository/commits/${commitSha}/diff`
    );
    return data || [];
  } catch (err) {
    console.warn(`[GitLab] No se pudo obtener diff para ${commitSha}:`, err.message);
    return [];
  }
}
