import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);


	export  function load({ params }) {
		
		const result2 = py.evalSync(pymodule, "getcountries()");
        console.log(result2)
		 return result2;

	}	