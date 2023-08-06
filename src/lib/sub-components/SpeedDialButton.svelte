<script>
	import { db } from '$lib/db.js';
	import { Modal, Button, Label, Input, Spinner } from 'flowbite-svelte';
	/**
	 * @type {boolean}
	 */
	let defaultModal = false;
	/**
	 * @type {string}
	 */
	let articleUrl = '';
	/**
	 * @type {boolean}
	 */
	let isLoading = false;
	let articleData = [];
	console.log(import.meta.env.VITE_API_BASE_URL);
	const addArticle = async () => {
		try {
			isLoading = true; // Set isLoading to true before fetch
			const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}?url=${articleUrl}`);
			const data = await response.json();
			console.log(data.data);
			articleData = data.data;

			// @ts-ignore
			const id = db.articles.add({
				url: articleData.url,
				title: articleData.title,
				description: articleData.description,
				image: articleData.image,
				content: articleData.content,
				author: articleData.author,
				source: articleData.source,
				published: articleData.published,
				ttr: articleData.ttr
			});
			console.log(`Added article with id ${id}`);
		} catch (err) {
			console.error('Failed to fetch or add article:', err);
		} finally {
			isLoading = false; // Set isLoading back to false after fetch
			// Close the modal only after the fetch is completed
			defaultModal = false;
		}
	};
</script>

<button
	class="h-16 w-16 bg-primary-800 text-white rounded-full flex justify-center items-center cursor-pointer"
	on:click={() => (defaultModal = true)}
>
	<div class="text-content">Add</div>
</button>

<Modal title="Fetch new article" bind:open={defaultModal}>
	<div class="mb-6">
		<Label for="large-input" class="block mb-2">Article Link</Label>
		<Input id="large-input" size="lg" placeholder="Link to fetch" bind:value={articleUrl} />
	</div>
	<svelte:fragment slot="footer">
		<Button on:click={addArticle}>
			{#if isLoading}
				<Spinner class="mr-3" size="4" color="white" />
			{/if}
			Fetch Article</Button
		>
		<Button color="alternative" on:click={() => (defaultModal = false)}>Close</Button>
	</svelte:fragment>
</Modal>
