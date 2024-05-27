<script>
	export let data;
	import { page } from '$app/stores';

	let showComm = false; 

	$: {
		TriggerComment($page.params.postid);
	}

	const TriggerComment = (newValue) => {
		console.log(typeof newValue, newValue);
		if (typeof newValue == 'string') showComm = false;
		else showComm = !showComm;
	};
</script>


<p>{data.post.body}</p>
<div>
	<button on:click={TriggerComment} class='w-24  bg-green-500 hover:bg-green-700 text-white  py-0.8 px-4 rounded' >
		{!showComm?"Показать":"Скрыть"}
	</button>
</div>
<hr>
<div class='comments'>
	{#if showComm}
		{#each data.comments as comm}
			<div class="comment">
				{comm.body}
			</div>
		{/each}
	{/if}
</div>

<style>
	.comments{
		font-size: small;
		margin:5px;
	}
	.comments div {
		border-bottom:1px solid gray;
		padding:5px;
	}
</style>
