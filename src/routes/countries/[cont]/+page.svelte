<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.params.cont}</title>
</svelte:head>

<div style="border:1px solid blue;padding:25px">
	{#each data.world.alldata.filter((country) => country[1] == $page.params.cont.toUpperCase()) as item}
		<p>{item[0]}</p>
	{/each}
</div>