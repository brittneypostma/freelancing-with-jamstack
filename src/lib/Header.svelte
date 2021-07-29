<header>
	<div
		class="flex py-4 items-center space-x-2 text-white mb-4 pb-10 lg:pb-24 xl:pb-10 max-w-4xl mx-auto 3xl:text-primary-100"
	>
		<a href="/">
			<img class="w-6" src="/images/jammy.png" alt="Jammy logo" />
		</a>
		<ul class="hidden sm:flex space-x-2 justify-center">
			<li><a href="/">Home</a></li>
			<li><a href="/courses">Courses</a></li>
			<li><a href="/tracks">Tracks</a></li>
		</ul>
	</div>
</header>

<style>
	header {
		background: no-repeat top / contain url(/static/images/jelly-drip.svg);
		background-size: 300% auto;
	}
	@media (min-width: 640px) {
		header {
			background-size: 200% auto;
		}
	}
	@media (min-width: 1280px) {
		header {
			background-size: 100% auto;
		}
	}
	/* Get rid of jelly drip */
	@media (min-width: 2000px) {
		header {
			background: none;
			padding-top: 2rem;
		}
	}
</style>
