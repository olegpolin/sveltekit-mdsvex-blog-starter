<script lang="ts">
  import type { PageProps } from './$types';
  import { Button } from '$lib/components/ui/button';
  import { formatDate } from '$lib/utils';
  import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';

  let { data }: PageProps = $props();
  let Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.meta.title} - Blog - SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<div class="flex flex-col items-center gap-16">
  <article class="max-md:max-w-full prose prose-zinc dark:prose-invert mx-auto">
    <h1>{data.meta.title}</h1>
    <p class="text-sm text-muted-foreground">{formatDate(data.meta.date)}</p>
    <Content />
  </article>

  <Button variant="outline" href="/blog">
    <ArrowLeftIcon />
    Back to Blog
  </Button>
</div>
