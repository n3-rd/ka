<script>
	import { currentArticle } from './../stores.js';
	import ArticleHeader from '$lib/article-components/ArticleHeader.svelte';
	import { Heading, Hr } from 'flowbite-svelte';
	import ArticleInfo from './article-components/ArticleInfo.svelte';
	import ArticleContent from './article-components/ArticleContent.svelte';
	let currentArticleData = $currentArticle;
</script>

<div class="h-full w-full">
	<div class="article-image-container w-full h-[22rem] flex justify-center py-5">
		<div
			class="article-image w-[65%] h-full bg-[url(/img/user-placeholder.png)] bg-center bg-cover rounded-xl"
		/>
	</div>
	<ArticleHeader headingText={$currentArticle.title} />
	<ArticleInfo authour={currentArticleData.author} ttr={currentArticleData.ttr} />
	<Hr />

	<ArticleContent content={currentArticleData.content} />
</div>
