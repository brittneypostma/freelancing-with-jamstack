<script>
	import SEO from '@layout/SEO.svelte'
	export let title
	export let subtitle
</script>

<SEO {title} />

<main class="max-w-text mx-auto grid gap-4 lg:gap-10">
	<h1>{title}</h1>
	<h2 class="max-w-text mx-auto">{subtitle}</h2>
	<slot />
</main>
