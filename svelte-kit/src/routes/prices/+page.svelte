<script lang="ts">
    import type { PageData } from "./$types"
    import CurrentPrice from "../CurrentPrice.svelte"
    import ChartPrices from "../ChartPrices.svelte"
    export let data: PageData
    
</script>

<svelte:head>
	<title>El prices</title>
	<meta name="description" content="El prices" />
</svelte:head>

<div class="center-things">
    <CurrentPrice price={data.prices.current} />
    <ChartPrices prices={data.prices.today} />
</div>

<style>

    .center-things {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 3vmin;
    }
</style>