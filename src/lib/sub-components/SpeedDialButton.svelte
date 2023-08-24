<script>
 import ModalComponent from './ModalComponent.svelte';
 import { db } from '$lib/db.js';

 let defaultModal = false;
 let articleUrl = '';
 let isLoading = false;
 let articleData = [];

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

 const closeModal = () => {
   defaultModal = false;
 };
</script>

<button class="h-16 w-16 bg-primary-800 text-white rounded-full flex justify-center items-center cursor-pointer"
  on:click={() => (defaultModal = true)}>
 <div class="text-content">Add</div>
</button>

<ModalComponent
  bind:defaultModal={defaultModal}
  bind:articleUrl={articleUrl}
  isLoading={isLoading}
  addArticle={addArticle}
  closeModal={closeModal}
/>
