# Reglas de Seguridad del Proyecto

- **Seguridad de Credenciales y Secretos:**
  - NUNCA incluir credenciales reales, tokens de acceso (`glpat-...`, `ghp_...`, `sk-...`, etc.) ni contraseñas en archivos README, documentación, código fuente ni commits.
  - En ejemplos de configuración usar siempre marcadores genéricos (ej: `GIT_TOKEN=tu_token_aqui`).
  - Mantener siempre `.env` en `.gitignore`.

- **Formato del Changelog (Estilo 66text):**
  - La línea de tiempo (`docs/novedades/cronologia.md`) utiliza bloques de versión estructurados (`<div className="release-block" id="YYYY-MM-DD">`).
  - Cada entrega debe usar viñetas con badges de estado:
    - 🟢 `badge-new`: Nuevas funcionalidades o módulos (`feat`).
    - 🔵 `badge-tweak`: Mejoras y optimizaciones (`perf`, `refactor`, `style`).
    - ⚪ / 🟠 `badge-fix`: Correcciones de errores y bugs (`fix`).
  - El orden debe ser siempre estrictamente descendente (de la fecha más reciente a la más antigua).
  - El bot (`scripts/bot/cli.mjs`) debe validar commits, ignorar merges/assets compilados y actualizar los contadores acumulados de forma idempotente.

- **Despliegues (GitHub Pages / GitLab Pages):**
  - Para GitHub Pages: `pnpm deploy` utiliza la rama `gh-pages`.
  - Para GitLab Pages: `.gitlab-ci.yml` compila el sitio y expone los artefactos en el directorio requerido `public/`.
  - La URL y baseUrl son dinámicas mediante `process.env.DOCUSAURUS_URL` y `process.env.DOCUSAURUS_BASE_URL`.

