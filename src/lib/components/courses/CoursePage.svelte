<script>
	import SEO from '@lib/SEO.svelte'
	import Tracks from '@lib/tracks/Tracks.svelte'
	import Track from '@lib/tracks/Track.svelte'
	export let title
	export let subtitle
</script>

<SEO {title} />

<h1>{title}</h1>
<h2>{subtitle}</h2>

<slot />
