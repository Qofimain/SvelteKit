<script>
	/** @type {import('./$types').LayoutServerData} */
	export let data;
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';


	if (browser) {
		goto(`countries/${data.world.regions[0].toLowerCase()}`);
	}
</script>