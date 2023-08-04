<script>
	import { Heading } from 'flowbite-svelte';
	export let headingText;
</script>

<Heading
	tag="h1"
	class="mb-4"
	customSize="text-4xl text-center font-extrabold  md:text-5xl lg:text-6xl">{headingText}</Heading
>
