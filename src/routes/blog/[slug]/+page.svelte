<script lang="ts">
  import type { PageProps } from './$types';
  import { formatDate } from '$lib/utils';

  let { data }: PageProps = $props();
  let Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} - Blog - SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<article class="prose prose-zinc dark:prose-invert mx-auto">
  <h1>{data.meta.title}</h1>
  <p class="text-sm text-muted-foreground">{formatDate(data.meta.date)}</p>
  <Content />
</article>
