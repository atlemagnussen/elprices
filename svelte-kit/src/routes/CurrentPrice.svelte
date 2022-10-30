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
    <span class="{level}">
        {Math.round(price.total*100)} øre
    </span>
    <DateViewer startDate={price.startsAt} />
</div>
<style>
    span {
        display: inline-block;
        font-size: 1.2rem;
    }
    div {
        display: inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        height: 90vw;
        width: 90vw;
        
        border-radius: 50%;
        /* background: var(--digilean-primary-button);
        color: var(--digilean-main-menu-text); */
        text-align: center;
        font-family: "Roboto Mono", monospace;
        
        border: 2px solid var(--cyan-dark);
    }
    .cheap {
        color: var(--un-green);
    }
    .normal {
        color: var(--color-theme-2);
    }
    .expensive {
        color: var(--pink-mild);
    }
    .very_expensive {
        color: var(--color-theme-1);
    }
</style>