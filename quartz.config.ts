import "dotenv/config"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

// const myGoatcounterCode = process.env.GOATCOUNTER_CODE as string;

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "supakorn.info",
    pageTitleSuffix: " | Supakorn's Notebook",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "GOATCOUNTER_CODE_PLACEHOLDER",
    },
    locale: "en-US",
    baseUrl: "supakorn.info",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    passProtected: {
      enabled: true,
      iteration: 2e6,
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Atkinson Hyperlegible",
        code: "Cascadia Code",
      },
      colors: {
        lightMode: {
          light: "#f2f2f2",
          lightgray: "#c9c9c9",
          gray: "#7d7d7d",
          darkgray: "#3e3e3e",
          dark: "#1c1c1c",
          secondary: "#3f7d4e",
          tertiary: "#88a67c",
          highlight: "rgba(63, 125, 78, 0.15)",
          textHighlight: "#88a67c55",
        },
        darkMode: {
          light: "#1c1c1c",
          lightgray: "#3e3e3e",
          gray: "#7d7d7d",
          darkgray: "#c9c9c9",
          dark: "#f2f2f2",
          secondary: "#4caf60",
          tertiary: "#a6c49f",
          highlight: "rgba(76, 175, 96, 0.15)",
          textHighlight: "#a6c49f55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.Staticrypt(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.FancyText(),
      // Plugin.StickyNotes(),
      Plugin.TelescopicText(),
      Plugin.MusicABCPlugin(),
      Plugin.ezTextReplacer(),
      Plugin.BlurText(), // this NEEDS to be in the later half, like right before syntax highlighting
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha",
        },
        keepBackground: false,
      }),
      Plugin.Citations({ bibliographyFile: "./content/bibliography.bib", linkCitations: true }),
      Plugin.Carousel2({ showDots: true }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.TableOfContents2(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }), // this is links.tsx
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      // Plugin.ClickableImages(),
      Plugin.Carousel({ showDots: true }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

// Wishful thinking/TODO: make it so that it refreshes on each DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//   const title = getRandomPageTitle();
//   // document.title = title + config.configuration.pageTitleSuffix;
//   config.configuration.pageTitle = title; // Update the config object
// });
export default config
