import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ], 
  "/get-started/": [
    {
      icon: "fa-solid fa-book",
      text: "快速上手",
      children: [
          "README.md",
          "setup.md",
          "basic.md",
      ],
    },
  ],
});
