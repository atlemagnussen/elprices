<script lang="ts">
    //import { onMount } from "svelte"
    import { scaleLinear, scaleTime } from "d3-scale"
    import { line as d3Line, axisBottom, axisLeft, select } from "d3"
    import { extent, ticks } from "d3-array"
    import type { Price, PriceChart } from "../server/types"

    let svgEl: SVGElement | null = null
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
    <svg viewBox="0 0 {width} {height}" bind:this={svgEl}>
        <g>
            {#each chart.data as price}
                <circle r="6" 
                    cx={chart.xScale(new Date(price.startsAt))} 
                    cy={chart.yScale(price.total)} fill="red" />
            {/each}
        </g>
        <g transform={`translate(${buffer} 0)`}>
            <path d={chart.line} stroke="white" stroke-width="2px" fill="none"></path>
        </g>
        <g transform={`translate(0 ${height-10})`}>
            <line x1="0" x2={width}></line>
        </g>
        {#each chart.xScale.ticks(5) as tick}
            <g transform={`translate(${chart.xScale(tick)} ${height-buffer})`}>
                <line y1="-10" y2="-5" stroke="white" />
                <text y="10" text-anchor="middle" fill="white">{new Date(tick).getHours()}</text>
            </g>
        {/each}

        <g transform="translate(30 0)">
            <line y1="0" y2={height} stroke="white"></line>
        </g>
        {#each chart.yScale.ticks(5) as tick}
            <g transform={`translate(${buffer} ${chart.yScale(tick)})`}>
                <line x1="20" x2="25" stroke="white" />
                <text x="15" dominant-baseline="middle" text-anchor="end" fill="white">{tick}</text>
            </g>
        {/each}
    </svg>
</div>
<style>
	.chart {
        font-size: 8vmin;
	}
    .chart, svg {
        height: 100%;
        width: 100%;
    }   
</style>