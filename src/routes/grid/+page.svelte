<script>
    const fetcharr = (async () => {
        const arrdata = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await arrdata.json()
    
    })
    let x = fetcharr()
</script>

{#await x}
<p>...wait</p> 
{:then data} 
<!-- {JSON.stringify(data)} -->
<div class="wrapper">
  {#each data as item}
  
     <div class ="itemstyle">
        <div class="positionid">{item.id} </div>
        <div class="positionuserId"> {item.userId}</div>
                {item.title}
    </div>
  {/each}  
</div>
{/await}

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  
  grid-auto-rows: minmax(100px, auto);
  

}
.itemstyle{
    padding: 20px 10px;
    border:4px solid white;
    background-color: brown;
    position: relative;
    
    
}

.positionid{
    position:absolute;
    top:5px;
    left:10px;
    
    
}
.positionuserId{
    position:absolute;
    top:5px;
    right:10px;
    
}
</style>