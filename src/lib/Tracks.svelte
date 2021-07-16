<script>
	import Track from '@lib/Track.svelte'
</script>

<section class="grid gap-5 justify-center lg:flex lg:gap-0 lg:space-x-10 lg:justify-between">
	<Track
		link="/"
		color="purple-gradient"
		title="HTML Track"
		desc="Make money using just HTML, CSS, & Javascript"
	/>
	<Track
		link="/"
		color="red-gradient"
		title="Svelte Track"
		desc="No prior framework knowledge required (easiest Start)"
	/>
	<Track
		link="/"
		color="peach-gradient"
		title="React Track"
		desc="Basic React knowledge helpful, uses Next.JS"
	/>
</section>
