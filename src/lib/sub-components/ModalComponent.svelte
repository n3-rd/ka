<script>
 import { Modal, Button, Label, Input, Spinner } from 'flowbite-svelte';
 import clipboard from 'clipboardy';

 export let defaultModal;
 export let articleUrl;
 export let isLoading;
 export let addArticle;
 export let closeModal;

 const handleFetchArticle = async () => {
   if (articleUrl) { // Check if the articleUrl is not empty
     await addArticle();
   }
   articleUrl = ''
 };

 const handlePasteUrl = async () => {
   articleUrl = await clipboard.read();
 }

 const isLink = (str) => {
   const urlPattern = /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]{2,}(\S+)?$/i;
   return urlPattern.test(str);
 }
</script>

<Modal title="Fetch new article" bind:open={defaultModal} on:close={closeModal}>
 <div class="mb-6">
   <Label for="large-input" class="block mb-2">Article Link</Label>
   <Input id="large-input" size="lg" placeholder="Link to fetch" bind:value={articleUrl} />
 </div>
 <svelte:fragment slot="footer">
  <div class="w-full flex justify-between">
    <div>
        <Button 
        disabled={!isLink(articleUrl)}
        on:click={handleFetchArticle}>
          {#if isLoading}
            <Spinner class="mr-3" size="4" color="white" />
          {/if}
          {#if isLink(articleUrl)}
          Fetch Article
          {:else}
          Enter a valid URL
          {/if}
        </Button>
      <Button color="alternative" disabled={isLoading} on:click={closeModal}>Close</Button>
    </div>
    <div>
      <Button color="alternative" disabled={isLoading} on:click={handlePasteUrl}>Paste</Button>
    </div>
  </div>
 </svelte:fragment>
</Modal>
