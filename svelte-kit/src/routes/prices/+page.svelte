<script lang="ts">
    import type { PageData } from "./$types"
    import CurrentPrice from "../CurrentPrice.svelte"
    import ChartPrices from "../ChartPrices.svelte"
    export let data: PageData
    
    let showTomorrow = false
    function toggleTomorrow() {
        showTomorrow = !showTomorrow
    }
</script>

<svelte:head>
	<title>El prices</title>
	<meta name="description" content="El prices" />
</svelte:head>

<div class="center-things">

    <div class="container padding">
        <CurrentPrice price={data.prices.current} />
    </div>

    <button on:click={toggleTomorrow} class="{showTomorrow ? "tomorrow": ""}">Tomorrow</button>

    <div class="container padding2">
        {#if showTomorrow}
            <ChartPrices prices={data.prices.tomorrow} />
        {:else}
            <ChartPrices prices={data.prices.today} />
        {/if}
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
    .padding2 {
        padding: 10px;
    }

    button {
        background: transparent;
        color: white;
        margin-bottom: -40px;
        z-index: 100;
    }
    button.tomorrow {
        background-color: aqua;
        color: black;
    }
</style>