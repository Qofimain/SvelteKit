import { fail } from '@sveltejs/kit';
import * as db from '$lib/datas/tododata.js';

import * as fs from 'fs'
import { Buffer } from 'buffer';



export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		let offile = data.get("file")
        console.log("offile-", offile, offile.name)



		// db.createTodo(cookies.get('userid'), data.get('description'));

		try {
			db.createTodo(cookies.get('userid'), data.get('description'), data.get('test'));


			if (offile) {
				const filedata = new Uint8Array(Buffer.from(await offile.arrayBuffer()));
				fs.writeFile(`static/${offile.name}`, filedata, (err) => {
					if (err) {
						return fail(500, { error: err.message });
					}
					console.log('Файл сохранен');
				});
			}
	


		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};