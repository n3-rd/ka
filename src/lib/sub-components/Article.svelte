<script>
	import { Avatar, Popover } from 'flowbite-svelte';
</script>

<div
	class="flex items-center gap-3 hover:bg-slate-200 px-3 py-5 rounded-xl cursor-pointer"
	id="action"
>
	<Avatar src="/img/user-placeholder.png" alt="list icon" class="flex-shrink-0" rounded />
	<div class="min-w-0">
		<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
			How to create better routes in sveltekit
		</p>
		<p class="text-sm text-gray-500 truncate dark:text-gray-400">
			from <span class="text-primary-800 font-semibold">N3rd's Blog</span>
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
