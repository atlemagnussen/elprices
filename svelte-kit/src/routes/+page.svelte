<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<script lang="ts">


	let valueDate = new Date()

	let promise: Promise<Date> | null
	let load = () => {
		if (!promise) {
			promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(new Date())
				}, 1000)
			})
		}

		promise.then(value => {
			console.log(value)
			valueDate = value
		})
	}

</script>
<section>
	<p>Hello</p>
	<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}> -->
	<p>
		<a href="/prices">Prices</a>
		<br>
		<br>
		valueDate: {valueDate} <br>
		<button on:click="{load}">Load</button>
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
