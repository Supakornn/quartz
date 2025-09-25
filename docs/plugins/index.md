---
title: Quartz Plugins
tags:
  - index
---

# Quartz Plugins

This directory contains documentation for all available Quartz plugins. Plugins are the building blocks that power Quartz's functionality, from content processing to site generation.

## What you'll find here

Comprehensive documentation for Quartz's plugin ecosystem:

### Plugin Categories

#### Transformers
Plugins that process and transform content during the build:
- **[[Frontmatter]]** - Parse YAML/TOML frontmatter in markdown files
- **[[ObsidianFlavoredMarkdown]]** - Full Obsidian compatibility for wikilinks, callouts, and more
- **[[GitHubFlavoredMarkdown]]** - GitHub-style markdown parsing
- **[[SyntaxHighlighting]]** - Code syntax highlighting with multiple themes
- **[[Latex]]** - Mathematical notation and equation rendering

#### Filters
Plugins that determine which content gets included:
- **[[RemoveDrafts]]** - Exclude draft content from builds
- **[[ExplicitPublish]]** - Only include explicitly marked content

#### Emitters
Plugins that generate output files and assets:
- **[[ContentPage]]** - Generate individual content pages
- **[[FolderPage]]** - Create folder listing pages
- **[[TagPage]]** - Generate tag-based content listings
- **[[ContentIndex]]** - Build search and graph data
- **[[Assets]]** - Process and copy static assets
- **[[Static]]** - Copy static files to output

### Key Features

#### Content Processing
- **[[CreatedModifiedDate]]** - Add creation and modification timestamps
- **[[Description]]** - Generate page descriptions from content
- **[[TableOfContents]]** - Automatic table of contents generation

#### Site Enhancement
- **[[Favicon]]** - Configure site favicon
- **[[CNAME]]** - Set up custom domain configuration
- **[[NotFoundPage]]** - Custom 404 error pages

#### Advanced Features
- **[[ComponentResources]]** - Manage component dependencies
- **[[CustomOgImages]]** - Generate custom social media previews
- **[[AliasRedirects]]** - Set up URL redirects and aliases

## How Plugins Work

Quartz uses a three-stage pipeline:

1. **Transform** - Process markdown content and metadata
2. **Filter** - Determine which content to include
3. **Emit** - Generate final output files

Each plugin operates at one of these stages to contribute to the final site generation.

## Plugin Configuration

Most plugins can be configured in your `quartz.config.ts` file. Each plugin page includes:
- Configuration options
- Usage examples
- Customization tips
- Integration notes

## Creating Custom Plugins

For information on creating your own plugins, see the [[making plugins]] guide in the advanced documentation.

Whether you're customizing existing functionality or adding new features, the plugin system provides the flexibility to build exactly what you need.