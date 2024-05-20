<script>
    export let data;
</script>

<div class = "layoutposts">
    <div class ="posts">
        <slot />
    </div>

    <div class = "users">
        {#each data.users as users}
            <p>
                <a href ='/grid/{users}'>Ссылка {users}</a>
            </p>
        {/each}
    </div>
</div>

<style>
	.layoutposts {
		display: flex;
		flex-direction: row;
		border: 1px solid gray;
		margin: 20px;
	}
	.posts {
		width: 80%;
		border-right: 1px solid gray;
	}
	.users {
		width: 20%;
		text-align: center;
    margin-top: 25px;
	}
</style>