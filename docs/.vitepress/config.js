const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const footer = require("./config/footer");
const socialLinks = require("./config/socialLinks");

export default {
  base: process.env.NODE_ENV === "production" ? "/huangpw-blog/" : "/",
  title: "hpwのblog",
  description: "书山有路勤为径，学海无涯苦作舟。",
  lang: "zh-CN",
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar,
    footer,
    socialLinks,
  },
};