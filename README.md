<p align='center'>
<img src='https://raw.githubusercontent.com/vite-pwa/nuxt/main/hero.png' alt="@vite-pwa/nuxt - Zero-config PWA for Nuxt"><br>
Zero-config PWA Plugin for Nuxt
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/@vite-pwa/nuxt' target="__blank">
<img src='https://img.shields.io/npm/v/@vite-pwa/nuxt?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://www.npmjs.com/package/@vite-pwa/nuxt" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vite-pwa/nuxt?color=476582&label=">
</a>
<a href="https://vite-pwa-org.netlify.app/frameworks/nuxt" target="__blank">
    <img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20guides&color=2e859c" alt="Docs & Guides">
</a>
<br>
<a href="https://github.com/vite-pwa/nuxt" target="__blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/vite-pwa/nuxt?style=social">
</a>
</p>

<br>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## 🚀 Features

- 📖 [**Documentation & guides**](https://vite-pwa-org.netlify.app/)
- 👌 **Zero-Config**: sensible built-in default configs for common use cases
- 🔩 **Extensible**: expose the full ability to customize the behavior of the plugin
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)
- 🔌 **Offline Support**: generate service worker with offline support (via Workbox)
- ⚡ **Fully tree shakable**: auto inject Web App Manifest
- 💬 **Prompt for new content**: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
- ⚙️ **Stale-while-revalidate**: automatic reload when new content is available
- ✨ **Static assets handling**: configure static assets for offline support
- 🐞 **Development Support**: debug your custom service worker logic as you develop your application
- 🛠️ **Versatile**: integration with meta frameworks: [îles](https://github.com/ElMassimo/iles), [SvelteKit](https://github.com/sveltejs/kit), [VitePress](https://github.com/vuejs/vitepress), [Astro](https://github.com/withastro/astro), [Nuxt](https://github.com/nuxt/nuxt) and [Remix](https://github.com/remix-run/remix)
- 💥 **PWA Assets Generator**: generate all the PWA assets from a single command and a single source image
- 🚀 **PWA Assets Integration**: serving, generating and injecting PWA Assets on the fly in your application

## 📦 Install

> From v2.0.0, `@vite-pwa/nuxt` requires Vite 5 and Nuxt 4.0.0+.

> Nuxt 3 is no longer supported: use `@vite-pwa/nuxt@1`. See the [Nuxt release cycle](https://nuxt.com/docs/3.x/community/roadmap) for the Nuxt 3 end-of-life date.

```bash
npx nuxi@latest module add @vite-pwa/nuxt
```

## 🦄 Usage

Add `@vite-pwa/nuxt` module to `nuxt.config.ts` and configure it:

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  }
})
```

Read the [📖 documentation](https://vite-pwa-org.netlify.app/frameworks/nuxt) for a complete guide on how to configure and use
this plugin.

## ⚡️ Examples

You need to stop the dev server once started and then to see the PWA in action run:
- `nr dev:preview:build`: Nuxt build command + start server
- `nr dev:preview:generate`: Nuxt generate command + start server

<table>
<thead>
<tr>
<th>Example</th>
<th>Source</th>
<th>Playground</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Auto Update PWA</code></td>
<td><a href="https://github.com/vite-pwa/nuxt/tree/main/playground">GitHub</a></td>
<td>
<a href="https://stackblitz.com/fork/github/vite-pwa/nuxt" target="_blank" rel="noopener noreferrer">
  <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz" width="162" height="32">
</a>
</td>
</tr>
</tbody>
</table>

## 👀 Full config

Check out the type declaration [src/types.ts](./src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Workbox](https://developers.google.com/web/tools/workbox)

## 📄 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Anthony Fu](https://github.com/antfu)
