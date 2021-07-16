<script>
	export let mainTitle
	export let subTitle
	export let desc
</script>

<article class="max-w-sm">
	<a
		href="/"
		class="bg-basics-20 max-w-lg rounded-lg shadow-highlight transition-all duration-300 hover:shadow-hover grid gap-4 p-4 text-center"
	>
		<h2>{mainTitle}<br />{subTitle}</h2>
		<p class="max-w-xs">{desc}</p>
	</a>
</article>
