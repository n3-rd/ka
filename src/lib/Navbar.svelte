<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider
	} from 'flowbite-svelte';
	import {theme} from '$lib/theme.js'

	console.log($theme)
	const toggleTheme = () => {
		if ($theme == 'dark') {
			theme.set('light')
		} else {
			theme.set('dark')
		}
	}

</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/icons/web/icon-192.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ka'</span>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar id="avatar-menu" src="/img/user-placeholder.png" rounded poi />
		<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm"> Bonnie Green </span>
			
		</DropdownHeader>
		<DropdownItem>Profile</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>
	 <NavUl {hidden}>
        {#if $theme == 'dark'}
            <NavLi class="cursor-pointer" on:click={() => toggleTheme()}>Light Mode</NavLi>
        {:else}
            <NavLi class="cursor-pointer" on:click={() => toggleTheme()}>Dark Mode</NavLi>
        {/if}
    </NavUl>
</Navbar>
