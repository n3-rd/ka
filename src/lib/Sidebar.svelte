<script>
	import { currentArticle } from '$lib/stores.js';
	import { db } from '$lib/db.js';
	import { Sidebar } from 'flowbite-svelte';
	import { liveQuery } from 'dexie';
	import Article from '$lib/sub-components/Article.svelte';
	import SpeedDialButton from '$lib/sub-components/SpeedDialButton.svelte';
	import List from '$lib/skeletons/List.svelte';

	// @ts-ignore
	let articleData = liveQuery(() => db.articles.toArray());
	/**
	 * Description
	 * @param {any} article
	 * @returns {any}
	 */
	const setCurrentArticle = (
		/** @type {{id:number; url: string; title: string; author: string; published: string; ttr: number; image: string; content: string; }} */ article
	) => {
		currentArticle.set(article);
		console.log($currentArticle);
	};
</script>

<Sidebar asideClass="h-screen bg-white py-3 px-2 relative dark:bg-dark-900">
	<div class="flex flex-col gap-4 max-h-screen overflow-y-scroll">
		{#if $articleData}
			<ul class="divide-y divide-slate-100 dark:divide-none overflow-x-hidden">
				{#each $articleData.reverse() as article}
					<button on:click={setCurrentArticle(article)} class="w-full">
						<Article
							title={article.title}
							source={article.source}
							image={article.image}
							id={article.id}
							url={article.url}
						/>
					</button>
				{/each}
			</ul>
		{/if}
	</div>
	<!-- check if still loading -->
	{#if !$articleData}
		<List />
	{/if}
	<div class="absolute right-2 bottom-2"><SpeedDialButton /></div>
</Sidebar>
