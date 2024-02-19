// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
const math = require('remark-math')
const katex = require('rehype-katex')
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Slipeda',
  tagline: '收藏从未停止, 学习从未开始',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'slipeda-log', // Usually your GitHub org/user name.
  projectName: 'slipeda-log', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN', //en
    locales: ['zh-CN'],
  },

  // markdown: {
  //   mermaid: true,
  // },

  // themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Jonesy-1212/slipedaBlog/blob/main/',
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor:true
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogSidebarTitle: '全部',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Slipeda',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '学习笔记',
          // },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/Jonesy-1212',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // algolia: {
      //   // appId: 'FULE7ZKRWQ',

      //   // // Public API key: it is safe to commit it
      //   // apiKey: '6206ca5a3da00fad9c7e4bf05f83ee61',

      //   // // algolia application name
      //   // indexName: 'quanscheng',

      //   // // Optional: see doc section below
      //   // contextualSearch: true,

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      // },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
}

export default config
