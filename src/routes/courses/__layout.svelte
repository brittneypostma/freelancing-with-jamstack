<script>
	import '../../styles.css'
	import Header from '@lib/Header.svelte'
</script>

<Header />
<main class="max-w-text mx-auto grid grid-cols-1 gap-10">
	<slot />
</main>
