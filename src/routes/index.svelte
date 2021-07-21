<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true
</script>

<script>
	import SEO from '@lib/SEO.svelte'
	import Cards from '@lib/cards/Cards.svelte'
	import Tracks from '@lib/tracks/Tracks.svelte'
	import Track from '@lib/tracks/Track.svelte'
</script>

<SEO title="Freelancing in Jamstack" />
<div class="sm:flex sm:space-x-5 items-center justify-center lg:justify-between">
	<img class="w-20 lg:w-36 hidden sm:block" src="images/jammy.png" alt="Jammy" />
	<h1>Freelancing<br />with<br />Jamstack</h1>
	<img class="w-20 lg:w-36 hidden sm:block" src="images/toasty.png" alt="Toasty" />
</div>
<Cards />
<Tracks>
	<Track
	link="/vanilla"
	color="purple-gradient"
	title="Vanilla Track"
	desc="Make money using just HTML, CSS, & Javascript"
/>
<Track
	link="/svelte"
	color="red-gradient"
	title="Svelte Track"
	desc="No prior framework knowledge required (easiest Start)"
/>
<Track
	link="/react"
	color="peach-gradient"
	title="React Track"
	desc="Basic React knowledge helpful, uses Next.JS"
/>
</Tracks>

<style>
	h1 {
		background: linear-gradient(to bottom, #f10761 50%, #77002e);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0px 2px 4px rgba(98, 26, 16, 0.5);
	}
</style>
