<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<p>Hello</p>
	<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}> -->
	<p>
		<a href="/prices">Prices</a>
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
