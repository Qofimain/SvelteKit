<script>
	/** @type {import('./$types').PageData} */
	export let data;
    let selected =data.regions[0]//'AFRICA'
</script>
<!-- {JSON.stringify(data)} -->
<div class="layout">
	<main>
		<div style="border:1px solid blue;padding:25px">

            {#each data.alldata.filter(cntr =>cntr[1]==selected ) as item}
                <p>{item[0]}</p>
            {/each}
        </div>
	</main>

	<aside>
		<ul>
			{#each data.regions as reg}
				<li on:click={()=>selected=reg} style="cursor: pointer">
                    {reg.toLowerCase()}
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
	li {
		padding: 0 20px;
	}
</style>