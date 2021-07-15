<script>
	export let mainTitle
	export let subTitle
	export let desc
</script>

<article>
	<a
		href="/"
		class="bg-basics-20 max-w-lg rounded-lg shadow-highlight hover:shadow-hover grid gap-4 p-4 text-center"
	>
		<h2>{mainTitle}<br />{subTitle}</h2>
		<p>{desc}</p>
	</a>
</article>
