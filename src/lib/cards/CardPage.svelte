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
<Tracks>
	<Track link="/html" color="purple-gradient" title="HTML" desc="Semantic & Accessible First" />
    <Track link="/css" color="red-gradient" title="CSS" desc="From the Box Up" />
    <Track link="/javascript" color="peach-gradient" title="JavaScript" desc="The One without Types" />
</Tracks>

<slot />
