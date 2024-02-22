<script>
	/** @type {import('./$types').PageData} */
	export let data;
	// import { getCookie, setCookie, deleteCookie } from 'svelte-cookie';
	//строка выше не работает, выдает ошибку.
	import { onMount } from 'svelte';
    // let selected =data.regions[0]//'AFRICA'

	let selected
	onMount(() => 
	{
		const cookieValue = document.cookie
			.split("; ")
            .find((row) => row.startsWith("visited="))
            ?.split("=")[1];
			//Зачем тут разделение(split) не совсем понимаю

             if(cookieValue){
			   	selected = cookieValue}

			 else{
				selected =data.regions[0]//'AFRICA'
				
			 }  

			})
			
		const selcontinent =(cont)=>{
		selected=cont;
		document.cookie = `visited=${cont}`;
   };

</script>
{JSON.stringify(data.visited)}
<div class="layout">
	<main>
		<div style="border:1px solid blue;padding:25px">

            {#each data.alldata.filter(cntr =>cntr[1]==selected ) as item}
                <p>{item[0]}</p>
            {/each}
			{console.log(selected)}
        </div>
	</main>

	<aside>
		<ul>
			{#each data.regions as reg}
			
				<li on:click={()=>selcontinent(reg)} style="cursor: pointer">
                    {reg.toLowerCase() }
					
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