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

    <div class="container padding">
        <CurrentPrice price={data.prices.current} />
    </div>

    <div class="container">
        <ChartPrices prices={data.prices.today} />
    </div>
    
</div>

<style>

    .center-things {
        height: 100vh;
        max-height: 100vh;
        width: 100vw;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 3vmin;
    }
    .container {
        width: 100vw;
        max-width: 100vw;
        flex-basis: auto;
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        overflow: hidden;
    }
    .padding {
        padding: 5px;
    }
</style>