<script>
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>

	<aside>
		<ul>
			{#each data.world.regions as reg}
				<li>
					<a href="/countries/{reg.toLowerCase()}">{reg}</a>
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