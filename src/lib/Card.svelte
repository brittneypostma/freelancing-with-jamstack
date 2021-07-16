<script>
	export let mainTitle
	export let subTitle
	export let desc
</script>

<article
	class="max-w-smbg-basics-20 rounded-lg shadow-highlight transition-all duration-300 hover:shadow-hover grid gap-4 p-4 text-center"
>
	<h2>{mainTitle}<br />{subTitle}</h2>
	<p class="max-w-xs">{desc}</p>
	<div class="grid gap-2 lg:flex lg:gap-0 lg:space-x-2 lg:justify-between">
		<a href="/freelancing-book" role="button" class="red-gradient p-2">Book</a>
		<a href="/freelancing-course" role="button" class="purple-gradient p-2">Course</a>
	</div>
</article>
