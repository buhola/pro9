# 🤖 Bot de Actualización de Novedades - Facturador Pro 9

Este bot automatiza la sincronización y redacción de novedades de **Pro 9** directamente en el repositorio de documentación de Docusaurus.

---

## 🚀 Capacidades Principales

1. **Detección Automática de Estado:**
   - Reconoce la última fecha y commit procesado mediante el archivo `.bot-state.json` (o leyendo el historial de `docs/novedades/index.md` si se ejecuta por primera vez).
   - Es **100% idempotente**: no duplica entradas si se ejecuta múltiples veces.

2. **Filtrado Inteligente de Ruido:**
   - Descarta automáticamente **merges**, **commits de compilación de assets** (`public/build/*`, `manifest.json`, lockfiles) y cambios triviales sin impacto visual.

3. **Traducción con IA para el Usuario Final:**
   - Lee el título del commit, el mensaje y los archivos/diffs modificados.
   - Traduce tecnicismos a lenguaje comprensible para dueños de negocios, cajeros y contadores.
   - Compatible con **OpenAI** (`OPENAI_API_KEY`) y **Google Gemini** (`GEMINI_API_KEY`).
   - Cuenta con un **Motor de Reglas y Heurísticas Integrado** que funciona incluso sin conexión a APIs de IA.

4. **Actualización Integral de Secciones:**
   - **Resumen (`docs/novedades/index.md`)**: actualiza periodo cubierto y conteo total de cambios publicados.
   - **Línea de tiempo (`docs/novedades/cronologia.md`)**: organiza las entregas por meses y días en orden estrictamente cronológico.
   - **Lo más destacado (`docs/novedades/destacados.md`)**: agrega las funcionalidades principales con enlaces válidos al sistema.
   - **Carpetas de módulos (`docs/novedades/*/*.md`)**: clasifica cada cambio en ventas (pos, tienda, vendeya, pagos, marketplace), operaciones (productos, guías, plantillas, comprobantes), comunicación (whatsapp, notificaciones) y gestión (admin, api, clientes, compras, dashboard, finanzas, interfaz).

5. **Verificación y Automatización:**
   - Verifica la sintaxis y enlaces ejecutando `pnpm build`.
   - Permite commit, push y deploy automático (`pnpm deploy`).
   - Incluye workflow de **GitHub Actions** (`.github/workflows/sync-novedades.yml`) para ejecución periódica programada.

---

## 📦 Comandos Rápidos

```bash
# 1. Sincronizar novedades desde la última fecha registrada
pnpm bot

# 2. Modo simulación (no modifica archivos)
pnpm bot:dry-run

# 3. Sincronizar y compilar Docusaurus
pnpm bot:build

# 4. Sincronizar desde una fecha específica
node scripts/bot/cli.mjs --since 2026-08-25

# 5. Sincronizar, compilar y crear commit en git
node scripts/bot/cli.mjs --build --commit

# 6. Ciclo completo (sync + build + commit + push)
node scripts/bot/cli.mjs --all
```

---

## ⚙️ Configuración (.env)

El archivo `.env` en la raíz del proyecto utiliza variables de entorno (nunca se commitea a Git):

```env
# Repositorio GitLab de Pro 9
GIT_USER=tu_usuario_o_oauth2
GIT_TOKEN=tu_token_de_acceso_personal
GIT_REPO=https://git.buho.la/facturaloperu/facturador/Pro9

# Inteligencia Artificial (opcional, para enriquecer descripciones)
OPENAI_API_KEY=tu_api_key_aqui
# o
GEMINI_API_KEY=tu_api_key_aqui
```
