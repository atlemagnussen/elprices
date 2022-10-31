<script lang="ts">
    //import { onMount } from "svelte"
    import { scaleLinear } from "d3-scale"
    import { extent, ticks } from "d3-array"
    import type { Price, PriceChart } from "../server/types"
    //import * as Pancake from "@sveltejs/pancake"

    //let svgEl: SVGElement | null = null
    const height = 500
    const width = 500
    const buffer = 10
    const axisSpace = 50

    export let prices: Price[] = []

    
    let calc = (ps: Price[]) => {
        console.log(ps)
        chart = format()
    }

    let format = (): PriceChart => {
        
        let xExtent = extent(prices, d => new Date(d.startsAt)) as [Date, Date]
        let yExtent = extent(prices, d => d.total) as [number, number]
        
        let xScale = scaleLinear().domain(xExtent).range([buffer + axisSpace, width-buffer])
        let yScale = scaleLinear().domain(yExtent).range([height-buffer-axisSpace, buffer])


        let yTicks = yScale.ticks()
        console.log(yTicks)
        return {
            data: prices,
            xExtent,
            yExtent,
            xScale,
            yScale
        }
    }

    let chart: PriceChart = format()

    $: calc(prices)


</script>
<div class="chart">
    <svg {width} {height}>
        {#each chart.data as price}
            <circle r="3" 
                cx={chart.xScale(new Date(price.startsAt))} 
                cy={chart.yScale(price.total)} fill="red" />
        {/each}

        {#each chart.xScale.ticks() as tick}
            <g transform={`translate(${chart.xScale(tick)} ${height-buffer})`}>
                <line y1="-10" y2="-5" stroke="white" />
                <text y="10" text-anchor="middle" fill="white">{new Date(tick).getHours()}</text>
            </g>
        {/each}

        {#each chart.yScale.ticks(5) as tick}
            <g transform={`translate(${buffer} ${chart.yScale(tick)})`}>
                <line x1="20" x2="25" stroke="white" />
                <text x="15" dominant-baseline="middle" text-anchor="end" fill="white">{tick*100}</text>
            </g>
        {/each}
    </svg>
</div>
<style>
	.chart {
		height: 450px;
		padding: 3em 0 2em 2em;
		margin: 0 0 36px 0;
		max-width: 80em;
		margin: 0 auto;
        font-size: 1.5vmin;
	}

</style>