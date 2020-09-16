
async function getData(url) {

  const res = await fetch(url)
  const data = await res.json()

  return data;
}

async function retornaAlbumUsers() {
  const albums = await getData('https://jsonplaceholder.typicode.com/albums')
  const users = await getData('https://jsonplaceholder.typicode.com/users')
  let albumsUsers = []
  for (let album of albums) {
    albumsUsers.push(
      {
        id: album.id,
        userId: album.userId,
        title: album.title,
        userName: users.filter((user) => album.userId === user.id).map(user => user.name)[0]
      }
    )
  }
  return albumsUsers
}

async function retornaPostUsers() {
  const posts = await getData('https://jsonplaceholder.typicode.com/posts')
  const users = await getData('https://jsonplaceholder.typicode.com/users')
  let postsUsers = []
  for (let post of posts) {
    postsUsers.push(
      {
        id: post.id,
        userId: post.userId,
        title: post.title,
        userName: users.filter((user) => post.userId === user.id).map(user => user.name)[0],
        body: post.body
      }
    )
  }
  return postsUsers
}

async function retornaToDosUsers() {
  const toDos = await getData('https://jsonplaceholder.typicode.com/todos')
  const users = await getData('https://jsonplaceholder.typicode.com/users')
  let toDosUsers = []
  for (let toDo of toDos) {
    toDosUsers.push(
      {
        id: toDo.id,
        userId: toDo.userId,
        title: toDo.title,
        userName: users.filter((user) => toDo.userId === user.id).map(user => user.name)[0],
        completed: toDo.completed
      }
    )
  }
  return toDosUsers
}

export { retornaAlbumUsers, retornaPostUsers, retornaToDosUsers }

