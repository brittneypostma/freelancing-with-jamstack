<script>
	import Cards from '@lib/Cards.svelte'
	import Tracks from '@lib/Tracks.svelte'
	let title = 'Freelancing with Jamstack'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<h1>{title}</h1>
<Cards />
<Tracks />

<style>
	h1 {
		background: linear-gradient(to bottom, #f10761 50%, #77002e);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0px 2px 4px rgba(98, 26, 16, 0.5);
	}
</style>
