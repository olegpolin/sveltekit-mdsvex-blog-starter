---
title: Svelte 5 is alive
description: After almost 18 months of development, comprising thousands of commits from dozens of contributors, Svelte 5 is finally stable.
date: 2024-10-22
---

After almost 18 months of development, comprising thousands of commits from dozens of contributors, Svelte 5 is finally stable.

It’s the most significant release in the project’s history. Svelte 5 is a ground-up rewrite: your apps will be faster, smaller and more reliable. You’ll be able to write more consistent and idiomatic code. For newcomers to the framework, there’s less stuff to learn.

Despite all that, Svelte is almost completely backwards-compatible with Svelte 4 — for the majority of users, the initial upgrade will be completely seamless:

```json
{
	"devDependencies": {
		// "@sveltejs/vite-plugin-svelte": "^3.0.0",
		// "svelte": "^4",
		"@sveltejs/vite-plugin-svelte": "^4.0.0",
		"svelte": "^5",
		// …
	}
}
```

## What is Svelte?

Svelte is a framework for building user interfaces on the web. It uses a compiler to convert declarative component code, based on HTML, CSS and JavaScript, into tightly optimised JavaScript.

Because the compiler shifts a lot of the work out of the browser and into `npm run build`, Svelte apps are small and fast. But beyond that, Svelte is designed to be an enjoyable and intuitive way to build apps: it prioritises getting stuff done.

The team behind Svelte also maintains SvelteKit, an application framework that handles routing and data loading and server-side rendering and all the gory details that go into building modern websites and apps.
