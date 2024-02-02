import { error } from '@sveltejs/kit';
import { posts } from '$lib/datas/data.js';

export function load(obj) {
	const post = posts.find((post) => post.slug === obj.params.slug2);
    console.log(obj)
	if (!post) throw error(404);

	return {
		post
	};
}
