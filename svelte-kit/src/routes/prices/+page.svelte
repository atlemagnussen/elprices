<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData
</script>


<svelte:head>
	<title>El prices</title>
	<meta name="description" content="El prices" />
</svelte:head>

<div class="text-column">
	<p>El prices</p>
    <p>{data.price.total} NOK</p>
</div>
