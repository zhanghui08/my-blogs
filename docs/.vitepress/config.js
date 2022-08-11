// vitepress/config.js
module.exports = {
  title: "Mr. Zhang's blog", // 网站标题
  description: "总结归纳学习中的知识", //网站描述
  dest:"./dist",
  base: "/my-blogs/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  lang: 'zh-CN', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        href: "/admin.png", //图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    subSidebar: 'auto',
    // repo: 'Bluestar123/day-blog/tree/master',
    repo: "vuejs/vitepress", // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Html/Css",
        items: [
          { text: "Html5", link: "/html/" },
          { text: "Css3", link: "/css/" },
        ],
      },
      // { text: 'Css', link: '/css/' },
      { text: "JavaScript", link: "/javascript/" },
      { text: "Vue", link: "/vue/" },
      { text: "React", link: "/react/" },
      { text: "微信小程序", link: "/wxwatch/" },
      { text: "部署", link: "/deployment/" },
    ],
    //   侧边导航
    sidebar: {
      html: [
        {
          text: "Html5",
          children: [
            { text: "概况", link: "/html/" },
            { text: "入门", link: "/html/htmlone" },
          ],
        },
      ],
      css: [
        {
          text: "Css3",
          children: [
            { text: "css文档", link: "/css/" },
            { text: "css文档1", link: "/css/cssone" },
          ],
        },
      ],
    },
  },
};
