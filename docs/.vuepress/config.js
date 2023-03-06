module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "CDH Vue Component Library",
      description: "Documentation site",
    },
  },

  themeConfig: {
    repo: "https://github.com/gu-gridh/GUITemplate",
    docsDir: "docs",
    editLinks: true,
    docsBranch: "dev",
    search: false,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        lastUpdated: "Last Updated",
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        nav: [
          { text: "Getting Started", link: "/guide" },
          { text: "Components", link: "/components/" },
        ],
        sidebar: {
          "/components/": [
            {
              title: "Components",
              collapsable: false,
              children: [
                "brand",
                "button-link",
                "button-list",
                "cdh-logo",
                "container",
                "controls",
                "footer",
                "go-link",
                "long-text",
                "main-title",
                "modal",
                "page-back",
                "pane",
                "row",
                "switch-button",
                "tabs",
              ],
            },
          ],
        },
      },
    },
  },

  base: process.env.BASE_URL || "/",
};
