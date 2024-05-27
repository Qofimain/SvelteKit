<script>
	export let data
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	
	if (browser) {
	 goto(`/grid/${data.userid}/${data.userposts[0]}`);
	}

</script>
	
	