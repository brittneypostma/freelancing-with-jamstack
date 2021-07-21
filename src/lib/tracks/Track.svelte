<script>
	export let color
	export let link
	export let title
	export let desc
</script>

<article class="grid gap-2 w-full">
	<a href={link} class={color} role="button">
		<h3>{title}</h3>
	</a>

	<p class="text-base">*{desc}</p>
</article>
