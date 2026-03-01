<script lang="ts">
  import type { PageProps } from './$types';
  import * as Empty from '$lib/components/ui/empty';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { formatDate } from '$lib/utils';
  import LibraryIcon from '@lucide/svelte/icons/library';

  let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog - SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl font-semibold">Latest Posts</h1>
  {#if data.posts.length === 0}
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="icon">
          <LibraryIcon />
        </Empty.Media>
        <Empty.Title>No Posts Found</Empty.Title>
        <Empty.Description>Posts are rendered from .md files.</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button href="/">Go Home</Button>
      </Empty.Content>
    </Empty.Root>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data.posts as post}
        <Card.Root>
          <Card.Header>
            <Card.Title class="text-2xl">{post.title}</Card.Title>
            <Card.Description>{formatDate(post.date)}</Card.Description>
          </Card.Header>
          <Card.Content>{post.description}</Card.Content>
          <Card.Footer class="mt-auto">
            <Button class="w-full" href="/blog/{post.slug}">Read More</Button>
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
  {/if}
</div>
