<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher defaultMode="dark" />

<Toaster richColors />

<div class="min-h-screen max-w-7xl flex flex-col mx-auto">
	<Header />

	<main class="grow flex flex-col px-4 sm:px-8 md:px-16 py-8">
		{@render children()}
	</main>

	<Footer />
</div>
