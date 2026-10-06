# Reglas de Seguridad del Proyecto

- **Seguridad de Credenciales y Secretos:**
  - NUNCA incluir credenciales reales, tokens de acceso (`glpat-...`, `ghp_...`, `sk-...`, etc.) ni contraseñas en archivos README, documentación, código fuente ni commits.
  - En ejemplos de configuración usar siempre marcadores genéricos (ej: `GIT_TOKEN=tu_token_aqui`).
  - Mantener siempre `.env` en `.gitignore`.
