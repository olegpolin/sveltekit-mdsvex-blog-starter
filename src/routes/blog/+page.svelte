<script lang="ts">
  import type { PageProps } from './$types';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { formatDate } from '$lib/utils';

  let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog - SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl font-semibold">Latest Posts</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each data.posts as post}
      <Card.Root>
        <Card.Header>
          <Card.Title class="text-2xl">{post.title}</Card.Title>
          <Card.Description>{formatDate(post.date)}</Card.Description>
        </Card.Header>
        <Card.Content>{post.description}</Card.Content>
        <Card.Footer class="mt-auto">
          <Button class="w-full" href="/blog/{post.slug}">Read more</Button>
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
</div>
