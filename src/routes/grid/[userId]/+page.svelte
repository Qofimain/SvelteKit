<script>
    export let data

</script>

<div class='posts'>
    {JSON.stringify(data.userPosts)}
    {#each data.userPosts as title}
    <div>
        <div class='meta left'>
            {title.userId}
            
        </div>

        <div class='meta right'>
            {title.id}
        </div>

        <div>
            {title.title}
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
		background-color: rgb(213, 209, 190);
    }

	.meta{
		background-color: blanchedalmond;
		position:absolute;
		
		top:3px;
		font-size:0.75rem
	}
	.left{
		left:10px; 
	}
	.right{
		right:10px; 
	}
</style>


