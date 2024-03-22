import { defineConfig } from 'vitepress'

var doc = 'Docs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Orca in The Sea",
  description: "Way to Science Universe",
  base: '/',
  srcDir: '../docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
     { text: 'Home', link: '/' },
    //  { text: 'Examples', link: '/markdown-examples' },
     { text: doc, link: '/database/' }
    ],
    outline: { label: 'Navigator'},

    sidebar: {
      '/' :[
        { text: 'database', link: '/docs/database/'
        }
      ],
      '.': [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples',
           items: [
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
          },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  
  '/docs/database/': [
    {
      text: 'Oracle',
      items: [
        {
          text: 'Isolation', link: '/docs/database/oracle/Isolation'
        }
      ]
    },
    {
      text: 'PostgreSql',
      items: [
        {
          text: 'PL/Sql', link: '/docs/database/postgresql/PLSql_block'
        }
      ]
    }
  ]
},

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
