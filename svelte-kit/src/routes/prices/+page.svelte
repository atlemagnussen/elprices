<script lang="ts">
    import type { PageData } from "./$types"
    import CurrentPrice from "../CurrentPrice.svelte"
    export let data: PageData
</script>

<svelte:head>
	<title>El prices</title>
	<meta name="description" content="El prices" />
</svelte:head>

<div class="center-things">
    <CurrentPrice price={data.price} />
</div>

<style>
    .center-things {
        text-align: center;
    }
</style>