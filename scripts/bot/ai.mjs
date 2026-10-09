import { config } from './config.mjs';
import { humanizeCommit, classifyModule, normalizeModuleKey } from './rules.mjs';

const SYSTEM_PROMPT = `Eres un redactor experto en documentación técnica de software empresarial para usuarios finales (dueños de negocios, cajeros, contadores y vendedores).
Tu labor es analizar commits y diffs de código del sistema de facturación "Pro 9" y transformarlos en notas de versión atractivas, claras y amigables.

REGLAS CRÍTICAS:
1. NUNCA uses tecnicismos de código como: "controller", "trait", "props", "vue", "el-input", "debounce", "accessor", "refactor", "pull request", "backend", "endpoint".
2. Describe el BENEFICIO o la ACCIÓN REAL desde la perspectiva del usuario: qué ve, qué puede hacer o qué error se le solucionó.
3. Idioma: Español neutro profesional.
4. Genera formato estructurado JSON con array de objetos conteniendo:
   - "userDescription": Texto con viñeta para la sección de módulo, empezando con una etiqueta en negrita. Ej: "**Módulo Mi Cuenta**: nueva sección para que cada usuario gestione su perfil, credenciales y preferencias de seguridad."
   - "shortDelivery": Frase corta (3 a 7 palabras) para la tabla de línea de tiempo. Ej: "Módulo Mi Cuenta con perfil y seguridad".
   - "moduleKey": ELIGE ÚNICAMENTE UNO DE ESTOS VALORES EXACTOS:
     * "ventas/pos.md"
     * "ventas/tienda-virtual.md"
     * "ventas/vendeya-mozo.md"
     * "ventas/pagos.md"
     * "ventas/marketplace.md"
     * "operaciones/productos-inventario.md"
     * "operaciones/guias.md"
     * "operaciones/plantillas.md"
     * "operaciones/comprobantes.md"
     * "comunicacion/notificaciones.md"
     * "comunicacion/whatsapp.md"
     * "gestion/administracion.md"
     * "gestion/api.md"
     * "gestion/clientes.md"
     * "gestion/compras.md"
     * "gestion/dashboard-reportes.md"
     * "gestion/finanzas.md"
     * "gestion/interfaz.md"
     * "gestion/otros-modulos.md"
   - "isMajor": Booleano (true si es una novedad destacada o nuevo módulo, false si es mejora o corrección puntual).`;

export async function explainCommitsWithAI(commitList) {
  // Si no hay proveedor de IA configurado, usar motor de reglas
  if (config.aiProvider === 'rules' || (!config.geminiApiKey && !config.openaiApiKey && !config.aiBaseUrl)) {
    return commitList.map((c) => {
      const { userDescription, shortDelivery, isMajor, type, badgeClass, typeTitle } = humanizeCommit(c.title);
      const moduleKey = classifyModule(c.title, c.sourceFiles || []);
      return {
        id: c.id,
        shortId: c.short_id || c.id.slice(0, 8),
        date: c.created_at,
        title: c.title,
        userDescription,
        shortDelivery,
        moduleKey: normalizeModuleKey(moduleKey),
        isMajor,
        type,
        badgeClass,
        typeTitle,
      };
    });
  }

  // Si hay IA configurada, procesar por lotes de 10
  const results = [];
  const batchSize = 10;
  const totalBatches = Math.ceil(commitList.length / batchSize);

  for (let i = 0; i < commitList.length; i += batchSize) {
    const currentBatchNum = Math.floor(i / batchSize) + 1;
    process.stdout.write(`\r🤖 Procesando con IA: lote ${currentBatchNum}/${totalBatches}...`);

    const batch = commitList.slice(i, i + batchSize);
    try {
      const aiResults = await callAIProvider(batch);
      results.push(...aiResults);
    } catch (err) {
      console.warn(`\n[AI] Error llamando a IA para el lote ${currentBatchNum}, usando reglas:`, err.message);
      // Fallback a reglas para este lote
      for (const c of batch) {
        const { userDescription, shortDelivery, isMajor } = humanizeCommit(c.title);
        const moduleKey = classifyModule(c.title, c.sourceFiles || []);
        results.push({
          id: c.id,
          shortId: c.short_id || c.id.slice(0, 8),
          date: c.created_at,
          title: c.title,
          userDescription,
          shortDelivery,
          moduleKey: normalizeModuleKey(moduleKey),
          isMajor,
        });
      }
    }
  }
  console.log('');

  return results;
}

async function callAIProvider(batch) {
  const promptInput = batch.map((c, idx) => ({
    id: idx,
    commit: c.title,
    archivos_modificados: (c.sourceFiles || []).slice(0, 5),
    mensaje_completo: (c.message || '').slice(0, 300),
  }));

  const userPrompt = `Analiza los siguientes commits y devuelve un array JSON con los campos solicitados para cada uno:
${JSON.stringify(promptInput, null, 2)}`;

  let jsonStr = '';

  if (config.aiProvider === 'gemini' && config.geminiApiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${config.aiModel}:generateContent?key=${config.geminiApiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      signal: AbortSignal.timeout(25000),
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `${SYSTEM_PROMPT}\n\n${userPrompt}` }]
          }
        ],
        generationConfig: {
          responseMimeType: 'application/json'
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini error: ${res.status} ${await res.text()}`);
    }

    const data = await res.json();
    jsonStr = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
  } else if (config.openaiApiKey || config.aiBaseUrl) {
    const baseUrl = config.aiBaseUrl || 'https://api.openai.com/v1';
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      signal: AbortSignal.timeout(25000),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.openaiApiKey}`
      },
      body: JSON.stringify({
        model: config.aiModel || 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: 'json_object' }
      })
    });

    if (!res.ok) {
      throw new Error(`OpenAI error: ${res.status} ${await res.text()}`);
    }

    const data = await res.json();
    jsonStr = data.choices?.[0]?.message?.content || '{}';
  } else {
    throw new Error('No valid AI provider configured');
  }

  const parsed = JSON.parse(jsonStr);
  const items = Array.isArray(parsed)
    ? parsed
    : (parsed.items || parsed.commits || Object.values(parsed).find(Array.isArray) || []);

  return batch.map((c, idx) => {
    const aiItem = items[idx] || {};
    const fallbackRules = humanizeCommit(c.title);
    return {
      id: c.id,
      shortId: c.short_id || c.id.slice(0, 8),
      date: c.created_at,
      title: c.title,
      userDescription: aiItem.userDescription || fallbackRules.userDescription,
      shortDelivery: aiItem.shortDelivery || fallbackRules.shortDelivery,
      moduleKey: normalizeModuleKey(aiItem.moduleKey || classifyModule(c.title, c.sourceFiles || [])),
      isMajor: aiItem.isMajor !== undefined ? aiItem.isMajor : fallbackRules.isMajor,
      type: fallbackRules.type,
      badgeClass: fallbackRules.badgeClass,
      typeTitle: fallbackRules.typeTitle,
    };
  });
}
