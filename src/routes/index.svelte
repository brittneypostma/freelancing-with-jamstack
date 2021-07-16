<script>
	import Cards from '@lib/Cards.svelte'
	import Tracks from '@lib/Tracks.svelte'
	let title = 'Freelancing with Jamstack'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="lg:flex lg:space-x-5 items-center justify-between">
	<img class="w-20 hidden lg:block" src="images/jammy.png" alt="Jammy" />
	<h1>{title}</h1>
	<img class="w-20 hidden lg:block" src="images/toasty.png" alt="Toasty" />
</div>
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
