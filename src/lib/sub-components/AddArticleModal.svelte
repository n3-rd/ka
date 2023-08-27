<script>
  import { Modal, Button, Label, Input, Spinner } from 'flowbite-svelte';
  import { articleModal } from './stores.js'; // Use relative path
  import { db } from '$lib/db.js';
    import { articleModal } from '$lib/stores.js';

  let articleUrl = '';
  let isLoading = false;
  let articleData = [];

  const addArticle = async () => {
    try {
      isLoading = true;
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}?url=${articleUrl}`);
      const data = await response.json();
      console.log(data.data);
      articleData = data.data;

      const id = await db.articles.add({ // Wait for the ID before logging
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
      isLoading = false;
      defaultModal = false;
    }
  };
</script>

<Modal title="Fetch new article" bind:open={articleModal}>
  <div class="mb-6">
    <Label for="large-input" class="block mb-2">Article Link</Label>
    <Input id="large-input" size="lg" placeholder="Link to fetch" bind:value={articleUrl} />
  </div>
  <svelte:fragment slot="footer">
    <Button on:click={addArticle}>
      {#if isLoading}
        <Spinner class="mr-3" size="4" color="white" />
      {/if}
      Fetch Article
    </Button>
    <Button color="alternative" disabled={isLoading} on:click={() => (articleModal.set(false))}>
      Close
    </Button>
  </svelte:fragment>
</Modal>
