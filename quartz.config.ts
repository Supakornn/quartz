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
          light: "#ffffff",
          lightgray: "#d6d3d1",
          gray: "#5a5a5a",
          darkgray: "#2e2e2e",
          dark: "#121212",
          secondary: "#2f855a",
          tertiary: "#4ade80",
          highlight: "rgba(47, 133, 90, 0.15)",
          textHighlight: "#4ade8055",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#2e2e2e",
          gray: "#a3a3a3",
          darkgray: "#d6d3d1",
          dark: "#e5e5e5",
          secondary: "#38a169",
          tertiary: "#4ade80",
          highlight: "rgba(56, 161, 105, 0.15)",
          textHighlight: "#4ade8055",
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
