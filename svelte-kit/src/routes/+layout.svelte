<script>
	import './styles.css'
</script>

<main class="app">
	<slot />
</main>

<style>
	main.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
