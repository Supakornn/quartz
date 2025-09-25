---
title: Quartz Source Code
tags:
  - index
---

# Quartz Source Code

This directory contains the core source code for Quartz 4, a fast static site generator for digital gardens and note-taking systems.

## What you'll find here

The complete Quartz 4 implementation, organized into logical modules:

### Core Build System

- **`build.ts`** - Main build orchestrator and content processing pipeline
- **`cfg.ts`** - Configuration management and validation
- **`bootstrap-cli.mjs`** - Command-line interface bootstrap
- **`worker.ts`** - Multi-threaded content processing for large sites

### Component System (`components/`)

Reusable UI components built with TypeScript and JSX:
- **Layout Components** - Header, Footer, Body, etc.
- **Navigation** - Explorer, Breadcrumbs, TableOfContents
- **Interactive Features** - Search, Graph, Darkmode
- **Content Display** - PageList, TagList, RecentNotes
- **Utility Components** - Date, Spacer, Flex layouts

### Plugin Architecture (`plugins/`)

Extensible plugin system with three types:
- **Transformers** - Process and modify content during build
- **Filters** - Determine which content gets included
- **Emitters** - Generate final output files and assets

### Content Processing (`processors/`)

- **`parse.ts`** - Markdown parsing and transformation
- **`filter.ts`** - Content filtering logic
- **`emit.ts`** - Output generation and file writing

### Utilities (`util/`)

Core utility functions:
- **Path handling** - URL and file path management
- **Performance monitoring** - Build time tracking
- **Theming** - CSS and styling utilities
- **Type definitions** - TypeScript interfaces

### Styling (`styles/`)

SCSS stylesheets for:
- Base styling and typography
- Component-specific styles
- Theme variables and customization
- Responsive design patterns

### Internationalization (`i18n/`)

Multi-language support:
- Translation management
- Locale-specific formatting
- UI text internationalization

### Static Assets (`static/`)

- **Favicons** - Site icons and PWA assets
- **Default images** - Fallback and template images
- **Styling resources** - CSS and theme assets

## Architecture Overview

Quartz follows a pipeline architecture:
1. **Parse** - Transform markdown content using transformer plugins
2. **Filter** - Apply content filters to determine what gets published
3. **Emit** - Generate final HTML, CSS, and JavaScript assets

The system is designed for:
- **Performance** - Fast builds and hot-reloading
- **Extensibility** - Plugin-based architecture
- **Type Safety** - Full TypeScript implementation
- **Developer Experience** - Hot reloading and error handling

## For Developers

This codebase uses:
- **TypeScript** for type safety and better developer experience
- **esbuild** for fast compilation and bundling
- **SCSS** for advanced styling capabilities
- **Node.js** for build tooling and CLI

If you're interested in contributing or understanding how Quartz works internally, start with `build.ts` and the architecture documentation.