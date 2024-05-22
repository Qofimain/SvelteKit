<script>
    export let data
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Посты пользователя {$page.params.userid}</title>
</svelte:head>

<div class='posts'>
    
    {#each data.userPosts as item}
    <div>
		<div class="idrow">
        <div>
            UserId {item.userId}
            
        </div>

        <div>
            PostId {item.id}
        </div>
	</div>

        <div class = "bordercut">
            {item.body}
        </div>
    </div>    
    {/each}
</div>

<style>
    .posts {
		width: 95%; 
 		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 8px;
		padding: 15px 10px;
		margin: 20px auto;
		background-color: rgb(43, 45, 46);
		border: 1px solid rgb(255, 255, 255);
		
    }
	.bordercut{
		border: 1px solid rgb(255, 255, 255);
		
	}
	.idrow{
		column-count: 2;
		border: 1px solid white;
		padding: 5px;
		margin-left:px;

	}
</style>


