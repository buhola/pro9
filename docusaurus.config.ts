import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = 'buhola';
const projectName = 'pro9';

const config: Config = {
  title: 'Pro 9',
  tagline: 'Novedades del sistema y códigos de error SUNAT',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      hideOnScroll: true,
      title: 'Pro 9',
      logo: {
        alt: 'Pro 9',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Inicio',
          position: 'left',
          exact: true,
          activeBaseRegex: `^/${projectName}/?$`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'novedadesSidebar',
          position: 'left',
          label: 'Novedades',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sunatSidebar',
          position: 'left',
          label: 'Errores SUNAT',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Novedades',
          items: [
            {label: 'Resumen', to: '/novedades'},
            {label: 'Lo más destacado', to: '/novedades/destacados'},
            {label: 'Línea de tiempo', to: '/novedades/cronologia'},
          ],
        },
        {
          title: 'SUNAT',
          items: [
            {label: 'Catálogo de errores', to: '/sunat-errores/'},
            {label: 'Servicio y envío', to: '/sunat-errores/servicio-envio'},
            {label: 'Rechazos', to: '/sunat-errores/rechazos'},
            {label: 'Observaciones', to: '/sunat-errores/observaciones'},
          ],
        },
      ],
      copyright: `Documentación Pro 9 · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
