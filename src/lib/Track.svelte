<script>
	export let color
	export let link
	export let title
	export let desc
</script>

<article class="grid gap-2">
	<a href={link} class={color} role="button">
		<h3>{title}</h3>
	</a>

	<p class="text-sm">*{desc}</p>
</article>
