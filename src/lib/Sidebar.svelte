<script>
	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;
</script>

<Sidebar asideClass="h-screen">
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarItem>
				<a href="/" class="flex items-center">qw</a>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
