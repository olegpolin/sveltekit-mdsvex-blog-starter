<script lang="ts">
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';
  import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import BookIcon from '@lucide/svelte/icons/book';
  import MenuIcon from '@lucide/svelte/icons/menu';
  import XIcon from '@lucide/svelte/icons/x';

  const navMenuLinks = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/blog'
    }
  ];
  let mobileMenuOpen = $state(false);
</script>

<header class="w-full flex flex-col gap-4 p-4">
  <div class="flex flex-row items-center justify-between gap-4">
    <div class="md:basis-1/4">
      <a class="inline-flex items-center gap-2 text-2xl font-semibold" href="/">
        <BookIcon />
        Blog
      </a>
    </div>

    <NavigationMenu.Root class="md:basis-1/2 max-md:hidden">
      <NavigationMenu.List>
        {#each navMenuLinks as navMenuLink}
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              {#snippet child()}
                <a href={navMenuLink.href} class={navigationMenuTriggerStyle()}>{navMenuLink.title}</a>
              {/snippet}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        {/each}
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <div class="md:basis-1/4 flex justify-end">
      <Button class="md:hidden" variant="ghost" size="icon" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
        {#if mobileMenuOpen}
          <XIcon class="size-6" />
        {:else}
          <MenuIcon class="size-6" />
        {/if}
      </Button>
    </div>
  </div>

  <Collapsible.Root class="md:hidden" bind:open={mobileMenuOpen}>
    <Collapsible.Content>
      <nav>
        <ul class="flex flex-col">
          {#each navMenuLinks as navMenuLink}
            <li>
              <Button class="h-14 w-full justify-start text-lg" variant="ghost" href={navMenuLink.href} onclick={() => mobileMenuOpen = false}>
                {navMenuLink.title}
              </Button>
            </li>
          {/each}
        </ul>
      </nav>
    </Collapsible.Content>
  </Collapsible.Root>
</header>
