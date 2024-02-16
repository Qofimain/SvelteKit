import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);


	export  function load({ params, cookies }) {
		const visited = cookies.get("visited")
		console.log(visited)

		const result2 = py.evalSync(pymodule, "getcountries()");
		result2.test = visited
        console.log(result2)
		return result2;

	}	