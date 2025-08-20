# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application using Vue 3, TypeScript, and Tailwind CSS. The project follows a minimal starter structure with the following key technologies:

- **Framework**: Nuxt 4.0.3 with Vue 3.5.18
- **Styling**: Tailwind CSS with Google Fonts integration
- **Image Optimization**: Nuxt Image module
- **Linting**: ESLint with Nuxt-specific configuration
- **Type System**: TypeScript with Nuxt's built-in type checking

## Development Commands

### Core Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run generate` - Generate static site
- `npm install` - Install dependencies (runs `nuxt prepare` automatically)

### Code Quality
- ESLint is configured via `eslint.config.mjs` using Nuxt's ESLint integration
- No explicit lint/typecheck commands defined in package.json - use Nuxt's built-in development tools

## Architecture

### File Structure
- `/app/app.vue` - Root application component (currently shows NuxtWelcome)
- `/nuxt.config.ts` - Main Nuxt configuration with modules
- `/tailwind.config.js` - Tailwind CSS configuration
- `/public/` - Static assets (favicon, robots.txt)

### Configured Modules
- `@nuxtjs/tailwindcss` - Tailwind CSS integration
- `@nuxt/eslint` - ESLint integration with Nuxt-specific rules
- `@nuxt/image` - Optimized image handling
- `@nuxtjs/google-fonts` - Google Fonts integration

### Key Configuration
- TypeScript enabled by default in Nuxt 4
- Development tools enabled (`devtools: { enabled: true }`)
- Compatibility date set to 2025-07-15