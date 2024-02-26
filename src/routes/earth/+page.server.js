import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);

	export  function load({ params, cookies }) {
		
		const cookiesCount = cookies.get("cookiesCount")

		if(Number(cookiesCount) > 0){
			cookies.set("cookiesCount", (Number(cookiesCount)+1), {path:'/'})	
		}
		else{
			cookies.set("cookiesCount", 1, {path:'/'})
		}
		


		const visited = cookies.get("visited")
		

		const result2 = py.evalSync(pymodule, "getcountries()");
		const result1 = cookiesCount
		result2.visited = visited
        console.log(result2)
		console.log(result1)
		
		return result2;

	}	
