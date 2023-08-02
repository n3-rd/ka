<script>
	import { Sidebar } from 'flowbite-svelte';
	import Article from '$lib/sub-components/Article.svelte';
	import SpeedDialButton from '$lib/sub-components/SpeedDialButton.svelte';
</script>

<Sidebar asideClass="h-screen bg-white py-3 px-2 relative">
	<div class="flex flex-col gap-4 max-h-screen overflow-y-scroll">
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
		<Article />
	</div>
	<div class="absolute right-2 bottom-2"><SpeedDialButton /></div>
</Sidebar>
