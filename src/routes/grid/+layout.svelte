<script>
    export let data;
	let current = data.users[0];
	const onlink_click = (userid) => {
		current = userid;
	};
</script>

<div class = "layoutposts">
    <div class ="posts">
        <slot />
    </div>

    <div class = "users">
        {#each data.users as users}
            <p class:backcoll={current===users}>
                <a href ='/grid/{users}' on:click={() => onlink_click(users)}>Ссылка {users}</a>
            </p>
        {/each}
    </div>
</div>

<style>
	.layoutposts {
		display: flex;
		flex-direction: row;
		border: 1px solid rgb(255, 255, 255);
		margin: 20px;
	}
	.posts {
		width: 80%;
		border-right: 1px solid rgb(255, 255, 255);
	}
	.users {
		width: 20%;
		text-align: center;
    margin-top: 25px;
	}
	.backcoll{
		background-color: brown;
		color: white;
	}
</style>