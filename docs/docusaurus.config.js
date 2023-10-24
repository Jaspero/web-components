// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web Component',
  tagline: 'A collection of web-components',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jaspero.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/web-components/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jaspero', // Usually your GitHub org/user name.
  projectName: 'web-components', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/Jaspero/web-components/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.css'
      }
    }
  ],

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js'
    },
    {
      src: 'https://cdn.quilljs.com/1.3.6/quill.js'
    },
    {
      src: '/web-components/c/index.js',
      type: 'module'
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: '@jaspero/web-components',
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs'
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      themes: ['@docusaurus/theme-live-codeblock'],
      themeConfig: {
        colorMode: {
          defaultMode: 'dark'
        }
      }
    })
};

module.exports = config;
