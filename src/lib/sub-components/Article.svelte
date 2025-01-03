<script>
	import { Avatar, Popover } from 'flowbite-svelte';
	/**
	 * @type {String}
	 */
	export let title;
	/**
	 * @type {String}
	 */
	export let source;
</script>

<div
	class="flex items-center gap-3 hover:bg-slate-200 px-3 py-5 rounded-xl cursor-pointer"
	id="action"
>
	<Avatar src="/img/user-placeholder.png" alt="list icon" class="flex-shrink-0" rounded />
	<div class="min-w-0">
		<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
			{title}
		</p>
		<p class="text-sm text-gray-500 truncate dark:text-gray-400">
			from <span class="text-primary-800 font-semibold">{source}</span>
		</p>
	</div>
</div>
<Popover
	class="w-64 text-sm font-light "
	title="Article Actions"
	triggeredBy="#action"
	trigger="click"
>
	And here's some amazing content. It's very engaging. Right?
</Popover>
