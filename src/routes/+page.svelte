<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>SvelteKit MDsveX Blog Starter</title>
	<meta name="description" content="SvelteKit + MDsveX blog starter template with Tailwind CSS and shadcn-svelte" />
</svelte:head>

<div class="grow flex items-center justify-center">
  <Card.Root class="w-full max-w-96">
    <Card.Header>
      <Card.Title>Blog</Card.Title>
      <Card.Description>This blog implementation uses MDsveX.</Card.Description>
    </Card.Header>
    <Card.Footer>
      <Button class="w-full" href="/blog">View posts</Button>
    </Card.Footer>
  </Card.Root>
</div>
