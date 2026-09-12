import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Zinc 文档",
  description: "Zinc 的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
