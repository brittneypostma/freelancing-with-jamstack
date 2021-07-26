<script context="module">
	import { browser, dev } from '$app/env'
	export const hydrate = dev
	export const router = browser
	export const prerender = true
</script>

<script>
	import SEO from '@lib/SEO.svelte'
	import CoursesPage from '@lib/courses/CoursesPage.svelte'
	import Tracks from '@lib/tracks/Tracks.svelte'
</script>

<SEO title="Freelancing in Jamstack" />

<main class="max-w-4xl mx-auto grid grid-cols-1 gap-10 lg:gap-20">
	<div class="sm:flex sm:space-x-5 items-center justify-center lg:justify-between">
		<img class="w-20 lg:w-36 hidden sm:block" src="images/jammy.png" alt="Jammy" />
		<h1>Freelancing<br />with<br />Jamstack</h1>
		<img class="w-20 lg:w-36 hidden sm:block" src="images/toasty.png" alt="Toasty" />
	</div>
	<CoursesPage />
	<Tracks />
</main>

<style>
	h1 {
		background: linear-gradient(to bottom, #f10761 50%, #77002e);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0px 2px 4px rgba(98, 26, 16, 0.5);
	}
</style>
