<script lang="ts">
    import type { PageData } from "./$types"
    import DateViewer from "../DateViewer.svelte"
    export let data: PageData
</script>


<svelte:head>
	<title>El prices</title>
	<meta name="description" content="El prices" />
</svelte:head>

<div class="text-column">
    <p>{Math.round(data.price.total*100)} øre</p>
    <DateViewer startDate="{data.price.startsAt}" />
</div>
