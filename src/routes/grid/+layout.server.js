async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let ids = []

    let data = await response.json()
    data.forEach(e => { ids.push(e.userId)});
    
    return {ids: [... new Set(ids)]}
  }
  
  export async function load() {
    let tmp = await getUsers()
    console.log(tmp)
    return {
      users: tmp.ids,
    }
  }
