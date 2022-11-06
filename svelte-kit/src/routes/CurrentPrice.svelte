<script lang="ts">
    import { Level, type Price } from "../server/types"
    import DateViewer from "./DateViewer.svelte"
    
    export let price: Price = { total: 1, currency: "NOK", level: Level.Normal, startsAt: "", tax: 0.1, energy: 0.2 }

    let level = "normal"
    let format = (p: Price) => {
        level = p.level.toLowerCase()
    }
    $: format(price)
</script>
<div>
    <span class="price {level}">
        {Math.round(price.total*100)} øre
    </span>
    <DateViewer startDate={price.startsAt} />
</div>
<style>
    span.price {
        display: inline-block;
        font-size: 10vmin;
    }
    div {
        display: flex;
        aspect-ratio: 1/1;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        height: 100%;
        width: 100%;
        max-height: 100vmin;
        max-width: 100vmin;
        border-radius: 50%;
        /* background: var(--digilean-primary-button);
        color: var(--digilean-main-menu-text); */
        text-align: center;
        font-family: "Roboto Mono", monospace;
        
        border: 2px solid var(--cyan-dark);
    }
</style>