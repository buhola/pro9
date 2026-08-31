# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

GitHub Pages: https://buhola.github.io/pro9/

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

With the GitHub Pages `baseUrl`, the site is served at http://localhost:3000/pro9/.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory, which can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub Pages for hosting, this command builds the website and pushes it to the `gh-pages` branch.
