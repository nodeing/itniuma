import nav from "./config/nav";
import sidebar from "./config/siderbar";
export default {
  appearance: "white",
  title: "螺钉课堂",
  description: "自学编程上螺钉课堂｜Java｜python｜前端｜go",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    siteTitle: "螺钉课堂",
    logo: "/logo.png",
    outlineTitle: "大纲",
    nav,
    sidebar,
    outline: [1, 3],
    footer: {
      message: "自学编程上螺钉课堂，官方微信: nodeing-cn",
      copyright:
        "课程内容版权均归 螺钉课堂 版权所有;ICP备案号：<a href='https://beian.miit.gov.cn/#/Integrated/index'>蜀ICP备15031208号-2</a>",
    },
  },
};
