<script lang="ts">
    import type { Price } from "../server/types"
    //import * as Pancake from "@sveltejs/pancake"

    let xmin = 0, xmax = 0
    let ymin = 0, ymax = 0

    let pri: number[] = []
    let times: number[] = []
    export let prices: Price[] = []

    let format = (ps: Price[]) => {
        times = ps.map(p => {
            let date = new Date(p.startsAt)
            return parseInt(`${date.getHours()}${date.getMinutes()}`)
        })
        xmin = Math.min(...times)
    }
    $: format(prices)
</script>
<div class="chart">
    <!-- <Pancake.Chart x1={xmin} x2={xmax} y1={miny} y2={maxy}>
    </Pancake.Chart> -->
</div>
<style>
	.chart {
		height: 450px;
		padding: 3em 0 2em 2em;
		margin: 0 0 36px 0;
		max-width: 80em;
		margin: 0 auto;
	}

</style>