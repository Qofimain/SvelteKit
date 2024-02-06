<script>
	export let data;
    console.log(data)
</script>

<h1>Python</h1>
<div>
	<a href='/'>Home</a>
</div>

{#if data.result}
<ul>
	{#each data.result as item}
		<li>{item[0]} -- {item[1]}</li>
	{/each}
</ul>
{/if}