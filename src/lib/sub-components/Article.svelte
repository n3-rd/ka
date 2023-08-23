<script>
	import { deleteArticle } from './../../stores.js';
	import { db } from '$lib/db.js';
	import { Avatar, Popover, Tooltip } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	/**
	 * @type {String}
	 */
	export let title;
	/**
	 * @type {String}
	 */
	export let source;
	/**
	 * @type {String}
	 */
	export let image;

	/**
	 * Description
	 * @param {any} article
	 */

	/**
	 * @type {number}
	 */
	export let id;

	const handleDeleteClick = async () => {
		await deleteArticle({ id });
		// You can also perform additional actions after deleting the article if needed
	};
</script>

<div
	class="flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-dark-800 px-3 py-5 rounded-xl cursor-pointer text-justify"
	id="action"
>
	<Avatar src={image} alt="list icon" class="flex-shrink-0 object-cover object-center" rounded />
	<div class="min-w-0">
		<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
			{title}
		</p>
		<p class="text-sm text-gray-500 truncate dark:text-gray-400">
			from <span class="text-primary-800 dark:text-primary-500 font-semibold">{source}</span>
		</p>
	</div>
	<!-- <div class="actions h-full bg-red-600 p-2" id="action">lww</div> -->
</div>
<Popover
	class="w-64 text-sm font-light "
	title="Article Actions"
	triggeredBy="#action"
	trigger="click"
>
	<div class="flex w-full justify-between">
		<Icon name="trash-bin-solid" on:click={handleDeleteClick} />
		<Tooltip placement="bottom">Delete Article</Tooltip>
		<Icon name="link-solid" />
		<Tooltip placement="bottom">Copy Article Link</Tooltip>
		<Icon name="share-all-solid" />
		<Tooltip placement="bottom">Share Article</Tooltip>
	</div>
</Popover>
