<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
  let Content = $derived(data.content);
</script>

<article class="prose prose-zinc dark:prose-invert mx-auto">
  <h1>{data.meta.title}</h1>
  <p class="text-sm text-muted-foreground">
    {new Date(data.meta.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })}
  </p>
  <Content />
</article>
