<script>
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	let creating = false;
	let fileInput;
	let pict;
	let todoDate;
	

	function getBase64(image) {
		console.log("Base64");
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			pict = e.target.result;
			
            
		};
	}


</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<form  enctype='multipart/form-data'
		method="POST"
		action="?/create"
		class="mx-auto max-w-sm"
		use:enhance
	>
		<div class="group relative z-0 mb-5 w-full">
			<label>
				add a todo:
				<input
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					name="description"
					value={form?.description ?? ''}
					autocomplete="off"
                    
					
				/>
			</label>
			<div>
				<input 
				bind:this={fileInput}
				on:change={() => getBase64(fileInput.files[0])}
				name="file"
				type="file"
				accept=".png,.jpg"
			/>
			
			<input type = "hidden" name="test" id="test" value={pict}/>
			
			</div>
		</div>
		<input 
			bind:this={todoDate}
			type = 'date' 
			name = 'datetodo'
			
			/>
		<div>
			<input type="submit" value="Save"  style="cursor: pointer;"/>
			
		</div>
	</form>

	<div class="todos">
		{#each data.todos as todo (todo.id)}
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={todo.id} />
				<div class:active={ new Date(todo.dateCreat).setHours(23) < new Date()} class="item" style="display:flex; width:100%; align-items: center;">
					<div style="flex:1">{todo.description}</div>
					<img class = "w-2" src={todo.picture}/>
					<date>{console.log(new Date(todo.dateCreat), new Date()), new Date(todo.dateCreat).toLocaleDateString()}</date> 
					<button class="del" title="удалить" />
				</div>
			</form>
		{/each}
	</div>

</div>

<style>
	.active{
		background-color: red;
	}
	.centered {
		max-width: 20em;
		margin: 50px auto;
		background: beige;
		padding: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 1);
		min-width: 33%;
	}
	.todos {
		border: 1px solid gray;
		overflow-y: auto;
		height: 200px;
		padding: 10px;
	}
	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	/* span {
		flex: 1;
	} */

	.del   {
		border: none;
		background: url('remove.svg') no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		width: 1rem;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 1.2s;
	}

	button:hover {
		opacity: 1;
	}

	.item:hover {
		background: #dde;
	}

	.saving {
		opacity: 0.5;
	}
</style>