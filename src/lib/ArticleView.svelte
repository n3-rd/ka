<script>
	import { currentArticle } from './../stores.js';
	import ArticleHeader from '$lib/article-components/ArticleHeader.svelte';
	import { Heading, Hr } from 'flowbite-svelte';
	import ArticleInfo from './article-components/ArticleInfo.svelte';
	import ArticleContent from './article-components/ArticleContent.svelte';
	import ArticleImage from './article-components/ArticleImage.svelte';
	let currentArticleData = $currentArticle;
</script>

<div class="h-full w-full">
	<ArticleImage imageUrl={$currentArticle.image} />
	<ArticleHeader headingText={$currentArticle.title} />
	<ArticleInfo authour={$currentArticle.author} ttr={$currentArticle.ttr} />
	<Hr />

	<ArticleContent content={$currentArticle.content} />
</div>
