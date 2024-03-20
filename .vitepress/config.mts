import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Orca in The Sea",
  description: "Way to Science Universe",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
     { text: 'Home', link: '/' },
    //  { text: 'Examples', link: '/markdown-examples' },
     { text: 'Database', link: '/docs/database/' }
    ],
    outline: { label: 'Navigator'},

    sidebar: {
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
