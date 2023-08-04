<script>
	import { onMount } from 'svelte';

	/**
	 * @type {String}
	 */
	export let content;

	onMount(() => {
		const formatPreElements = () => {
			const preElements = document.querySelectorAll('pre');
			preElements.forEach((e) => {
				e.style.overflowX = 'scroll';
			});
		};
		// const formatBlockQuotes = () =>{
		//     const blockQuotes = document.querySelectorAll('blockquote');
		//     const blockQuoteContent = blockQuotes.innerHtml;
		//     blockQuotes.re
		// }
		formatPreElements();
	});
</script>

<div class="article-content px-4 relative whitespace-break-spaces">
	{@html content}
</div>

<style lang="scss">
	.article-content {
		@apply overflow-x-hidden;
	}
</style>
