<script>
	/**
	 * @type {string}
	 */
	export let imageUrl;
</script>

<div class="article-image-container w-full h-[22rem] flex justify-center py-5">
	<div
		class="article-image w-[65%] h-full bg-center bg-cover rounded-xl"
		style="background-image: url({imageUrl})"
	/>
</div>
