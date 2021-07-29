<script>
	import '../styles.css'
	import Header from '@lib/Header.svelte'
</script>

<Header />

<main class="max-w-4xl mx-auto grid grid-cols-1 gap-10 lg:gap-20">
	<slot />
</main>
