<script lang="ts">
  import * as Empty from '$lib/components/ui/empty';
  import { Button } from '$lib/components/ui/button';
  import BookOpenIcon from '@lucide/svelte/icons/book-open';
</script>

<svelte:head>
	<title>SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<Empty.Root>
  <Empty.Header>
    <Empty.Media variant="icon">
      <BookOpenIcon />
    </Empty.Media>
    <Empty.Title class="text-2xl">SvelteKit MDsveX Blog Starter</Empty.Title>
    <Empty.Description>SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte</Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <Button href="/blog">View blog posts</Button>
  </Empty.Content>
</Empty.Root>
