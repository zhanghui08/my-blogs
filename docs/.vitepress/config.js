export default {
  title: "Mr.Zhang", //站点标题
  description: "总结归纳学习中的知识", //mate标签description，多用于搜索引擎抓取摘要
  base:"/my-blogs/",
  head: [["link",{rel: "icon",href: "/admin.png"}]],
  themeConfig: {
    siteTitle: "Mr. Zhang's blog",
    logo: "/admin.png",
    lang: 'zh-CN', //语言
    socialLinks: [
      { icon: "github", link: "https://github.com/zhanghui08/my-blogs" },
    ],
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Html/Css",
        items: [
          { text: "Html5", link: "/html/概况" },
          { text: "Css3", link: "/css/概况" },
        ],
      },
      { text: "JavaScript", link: "/javascript/常用" },
      {
        text: "Vue",
        items: [
          {
            items: [
              { text: "Vue2", link: "/vue/vue2" },
              { text: "Vue2 - 常用", link: "/vue/vue2常用" },
            ],
          },
          {
            items: [
              { text: "Vue3", link: "/vue/vue3" },
              { text: "Vue3 - 常用", link: "/vue/vue3常用" },
            ],
          },
        ],
      },
      { text: "React", link: "/react/" },
      { text: "微信小程序", link: "/wxwatch/" },
      {
        text: "部署/其他",
        items: [
          {
            items: [
              { text: "Git相关", link: "/deployment/git常用" },
              { text: "其他记录", link: "/deployment/其他" },
            ],
          }
        ]
      }
      
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-07-27～present aehyok",
    },
    sidebar: {
      "/html/": [
        {
          text: "Html5",
          collapsible: true,
          items: [
            { text: "概况", link: "/html/概况" },
            { text: "入门", link: "/html/入门" },
          ],
        },
        {
          text: "工作中常用",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "Html5-A",
              link: "/html/常用",
            },
          ],
        },
      ],
      "/css/": [
        {
          text: "Css3",
          collapsible: true,
          items: [
            { text: "概况", link: "/css/概况" },
            { text: "入门", link: "/css/入门" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue2",
          collapsible: true,
          // collapsed: true,
          items: [
            { text: "Vue 基础", link: "/vue/vue2基础" },
            { text: "Vue 开发须知道的技巧", link: "/vue/vue2" },
            { text: "Vue 父子组件间的数据传递", link: "/vue/vue2常用" },
          ],
        },
        {
          text: "Vue3",
          collapsible: true,
          items: [
            { text: "基础", link: "/vue/vue3" },
            { text: "入门", link: "/vue/vue3常用" },
          ],
        },
      ],
      "/deployment/": [
        {
          text: "Git-记录",
          collapsible: true,
          items: [
            { text: "基础", link: "/deployment/git基础" },
            { text: "常用", link: "/deployment/git常用" },
          ],
        },
        {
          text: "其他记录",
          collapsible: true,
          items: [
            { text: "test01", link: "/deployment/其他" },
          ],
        },
      ],
      "/javascript/": [
        {
          text: "JavaScript-记录",
          collapsible: true,
          items: [
            { text: "JavaScript常用", link: "/javascript/常用" },
            { text: "JavaScript优化小技巧", link: "/javascript/优化" },
            { text: "JavaScript高频手写题", link: "/javascript/高频手写题" },
          ],
        },
        {
          text: "ES6-记录",
          collapsible: true,
          items: [
            { text: "基本语法", link: "/javascript/es6" },
            { text: "ES6新特性", link: "/javascript/es6new" },
            { text: "ES6其他", link: "/javascript/es6其他" },
          ],
        }
      ]
    },
    
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
}
