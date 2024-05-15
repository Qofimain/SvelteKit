async function uniqUser(){
    const fetchdata = await fetch('https://jsonplaceholder.typicode.com/posts')
    let userIds = []
    let response = fetchdata.json()
    response.forEach(e => {!(e.userId in userIds)? userId.push(e.userId):false});

    return {posts:response,userIds:[...new Set(userIds)]}
}


export async function load({ params})
{
    let tmp = await uniqUser()
    return{
        posts: tmp.posts,
        userIds: tmp.userIds
    }
    
}
