<script>
	import { theme } from '$lib/theme.js';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.postcss';
</script>

<main class="overflow-hidden {$theme}">
	<div class="wrapper">
		<!-- Sidebar -->
		<aside class="sidebar h-screen bg-red-600">
			<Sidebar />
		</aside>

		<div class="content bg-slate-50 w-full">
			<!-- Navbar -->
			<nav class="navbar">
				<!-- Your navbar content here -->
				<Navbar />
			</nav>

			<!-- Main content area -->
			<div class="main-content overflow-y-scroll dark:bg-dark-900 h-full">
				<!-- Your main content here -->
				<slot />
			</div>
		</div>
	</div>
</main>

<style>
	/* Style your layout here */

	.wrapper {
		display: flex;
		height: 100vh; /* Adjust height as needed */
	}

	.sidebar {
		/* Define styles for the sidebar */
		flex: 0 0 320px; /* Adjust width as needed */
		max-width: 320px;
		background-color: #f0f0f0;
		/* Other styles... */
	}

	.main-content {
		/* Define styles for the main content area */
		padding: 1rem;
		/* Other styles... */
	}
	.dark {
		background-color: #333;
		color: white;
	}
</style>
