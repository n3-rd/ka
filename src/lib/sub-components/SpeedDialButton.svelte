<script>
	import { Modal, Button, Label, Input, Spinner } from 'flowbite-svelte';
	let defaultModal = false;
	const addArticle = () => {
		alert('Handle "success"');
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
		<Input id="large-input" size="lg" placeholder="Link to fetch" />
	</div>
	<svelte:fragment slot="footer">
		<Button on:click={addArticle}>
			<Spinner class="mr-3" size="4" color="white" />
			Fetch Article</Button
		>
		<Button color="alternative" on:click={() => (defaultModal = false)}>Close</Button>
	</svelte:fragment>
</Modal>
