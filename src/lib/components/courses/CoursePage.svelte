<script>
	import SEO from '@layout/SEO.svelte'
	import Tracks from '@components/tracks/Tracks.svelte'
	import Track from '@components/tracks/Track.svelte'
	export let title
	export let subtitle
</script>

<SEO {title} />

<h1>{title}</h1>
<h2>{subtitle}</h2>

<slot />
