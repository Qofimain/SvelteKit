async function getPostUsers(id)
{
    const contentPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    return contentPost.json()
}

export async function load({params})
{
    let userPost = await getPostUsers(params.userId);
    console.log(userPost);
    return   {
        userPosts: userPost
    }
}