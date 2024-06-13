<script>
const length = 5;    
var firstArr = [... Array(length)]
var secondArr = [... Array(length)]
var sum = [... Array(length)]
async function newranArray(){
    for (let i = 0; i < firstArr.length; i++){
        firstArr[i] = Math.round(Math.random() * 100)
        secondArr[i] = Math.round(Math.random() * 100)
}

for(let i = 0; i < sum.length; i++){
    sum[i] = firstArr[i] + secondArr[i]
}
return firstArr
}

</script>

<button on:click={newranArray}> Создать</button>

<table class="table-fixed">
    <thead>
      <tr>
        <th>Первый</th>
        <th>Второй</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody>
        {#each firstArr as item}
            <tr>{item}</tr>
        {/each} 
        <tr>
            {#each secondArr as item}
        <p>{item}</p>
    {/each}
        </tr>
    </tbody>
</table>        
<div>
    
    
    
</div>
<div>
    
</div>

<h5>Сумма элементов {sum}</h5>
