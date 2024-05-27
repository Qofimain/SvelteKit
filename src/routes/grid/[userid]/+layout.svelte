<script>
	export let data;
	import { page } from '$app/stores';
</script>


<div class="layoutuserposts">
	<div class="menu">
		{#each data.userposts as post}
			<div class:active={post == $page.params.postid}>
				<a href="/grid/{data.userid}/{post}">Post {post} </a>
			</div>
		{/each}
	</div>
	<div class="post">
		<slot />
	</div>
</div>

<style>
	.layoutuserposts {
		display: flex;
		flex-direction: row;
		border: 1px solid gray;
		margin: 20px;
	}

	.post {
		width: 75%;
	}
	.menu {
		width: 25%;
		text-align: center;
		min-width: 90px;
	}
	.active {
		background-color: blue;
		color: white;
	}
</style>
