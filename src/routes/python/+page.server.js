import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);

// pymodule = py.importSync("src/routes/test.py", true);

	export  function load({ params }) {
		
		const result = py.callSync(pymodule, 'multiple',[1, 2, 3, 4], [2, 3, 4, 5]); // result will hold the output of run_my_code
		const result2 = py.evalSync(pymodule, "multiple([1, 2*2, 3],[40,50,60])");
		console.log(result2);

		 return {result:result2};

	}	