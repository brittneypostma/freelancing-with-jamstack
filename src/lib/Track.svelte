<script>
	export let color
	export let link
	export let title
	export let desc
</script>

<article>
	<a href={link} class={color} role="button">
		<h3>{title}</h3>
	</a>

	<p>*{desc}</p>
</article>

<style>
</style>
