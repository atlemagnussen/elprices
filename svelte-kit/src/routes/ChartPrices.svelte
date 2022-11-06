<script lang="ts">
    //import { onMount } from "svelte"
    import { scaleLinear, scaleTime } from "d3-scale"
    import { line as d3Line, axisBottom, axisLeft, select } from "d3"
    import { extent, ticks } from "d3-array"
    import type { Price, PriceChart } from "../server/types"
    import { formatTimeOnly } from "../client/dateTimeFormatting"

    let tooltipEl: HTMLElement | null = null
    let showTooltip = (price: Price) => {
        console.log("showTooltip")
        if (!tooltipEl) return

        let p = `${Math.round(price.total*100)} øre`
        let time = formatTimeOnly(price.startsAt)
        let text = `${p}<br>${time}`
        tooltipEl.innerHTML = `<span>${text}</span>`
        tooltipEl.style.display = "block"
    }

    let hour24 = new Date()
    hour24.setHours(23)
    hour24.setMinutes(59)
    hour24.setSeconds(59)

    const height = 500
    const width = 500
    const buffer = 10
    const axisSpace = 50

    export let prices: Price[] = []

    let calc = (ps: Price[]) => {
        chart = format()
    }

    let format = (): PriceChart => {
        
        let xFunc = (d: Price) => new Date(d.startsAt)
        let yFunc = (d: Price) => d.total

        let xExtent = extent(prices, xFunc) as [Date, Date]
        let yExtent = extent(prices, yFunc) as [number, number]
        
        let xScale = scaleTime().domain(xExtent).range([buffer + axisSpace, width-buffer])
        let yScale = scaleLinear().domain(yExtent).range([height-buffer-axisSpace, buffer])

        let xAxis = axisBottom(xScale)
        let yAxis = axisLeft(yScale)

        const lineFunc = d3Line<Price>().x(d => xScale(new Date(d.startsAt))).y(d => yScale(d.total))
        const line = lineFunc(prices)
        

        return {
            data: prices,
            xExtent,
            yExtent,
            xScale,
            yScale,
            xAxis,
            yAxis,
            line
        }
    }

    let chart: PriceChart = format()

    $: calc(prices)

</script>
<div class="chart">
    <div id="tooltip" bind:this={tooltipEl}>
    </div>
    <svg viewBox="0 0 {width} {height}">
        <g>
            {#each chart.data as price}
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <circle r="6" on:mouseover={() => showTooltip(price)}
                    cx={chart.xScale(new Date(price.startsAt))} 
                    cy={chart.yScale(price.total)} fill="white"
                    class={price.level.toLowerCase()}>
                    <title>{price.total}"</title>
                </circle>
            {/each}
        </g>
        <!-- LINE -->
        <g>
            <path d={chart.line} stroke="white" stroke-width="2px" fill="none"></path>
        </g>

        <!-- X-AXIS -->
        <g transform={`translate(0 ${height-10})`}>
            <!-- <line x1="0" x2={width}></line> -->
        </g>
        {#each chart.xScale.ticks(5) as tick}
            <g transform={`translate(${chart.xScale(tick)} ${height-buffer})`}>
                <line y1="0" y2="-500" stroke="grey" stroke-width="1px" />
                <line y1="-10" y2="-5" stroke="white" />
                <text y="10" text-anchor="middle" fill="white">{new Date(tick).getHours()}</text>
            </g>
        {/each}
        <g transform={`translate(${chart.xScale(hour24)} ${height-buffer})`}>
            <line y1="0" y2="-500" stroke="grey" stroke-width="1px" />
        </g>
        <!-- Y_AXIS -->
        <!-- <g transform="translate(30 0)">
            <line y1="0" y2={height} stroke="white"></line>
        </g> -->
        {#each chart.yScale.ticks(5) as tick}
            <g transform={`translate(${buffer} ${chart.yScale(tick)})`}>
                <line x1="0" x2="500" stroke="grey" stroke-width="1px" />
                <line x1="20" x2="25" stroke="white" />
                <text x="15" dominant-baseline="middle" text-anchor="end" fill="white">{tick*100}</text>
            </g>
        {/each}
    </svg>
</div>
<style>
	.chart {
        font-size: 2rem;
        position: relative;
	}
    .chart, svg {
        height: 100%;
        width: 100%;
    }
    #tooltip {
        background: var(--pink-mild);
        border: 2px solid white;
        border-radius: 8px;
        display: none;
        position: absolute;
        top: 200px;
        left: 200px;
        width: 200px;
        height: 100px;
        z-index: 10;
    }
    circle.cheap {
        fill: var(--un-green);
    }
    circle.normal {
        fill: var(--color-theme-2);
    }
    circle.expensive {
        fill: var(--pink-mild);
    }
    circle.very_expensive {
        fill: var(--color-theme-1);
    }
</style>