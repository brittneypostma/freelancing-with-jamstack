<script>
		import Track from '@components/tracks/Track.svelte'
</script>

<section class="grid gap-5 justify-center lg:flex lg:gap-0 lg:space-x-10 lg:justify-between w-full">
		<Track
			link="/tracks/vanilla"
			color="purple-gradient"
			title="Vanilla Track"
			desc="Make money using just HTML, CSS, & Javascript"
		/>
		<Track
			link="/tracks/svelte"
			color="red-gradient"
			title="Svelte Track"
			desc="No prior framework knowledge required (easiest Start)"
		/>
		<Track
			link="/tracks/react"
			color="peach-gradient"
			title="React Track"
			desc="Basic React knowledge helpful, uses Next.JS"
		/>
</section>
