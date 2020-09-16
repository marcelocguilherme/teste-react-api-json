import React, { Component } from 'react'
import Card from './Card'
import css from './cardsAlbum.module.css'
import { retornaPostUsers } from '../../helpers/getData'

export default class CardsPosts extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    const posts = retornaPostUsers()

    posts.then(res => {
      this.setState({
        posts: res
      })
    })


  }

  render() {
    const { posts } = this.state



    return (
      <div className={css.corCard}>


        {/*  <ul className="list-group list-group-flush">
          {posts.map(post => (
            <li className="list-group-item" key={post.id} >
              {post.id} | {post.userId} | {post.userName}| {post.title} ||{post.body}

            </li>
          ))}
        </ul> */}
        <div className="container pt-5">

          <div className="row">
            {posts.map(post => {
              return (<div className='col-md-3'>
                <Card
                  id={post.id}
                  userId={post.userId}
                  userName={post.userName}
                  postTitle={post.title}
                  postBodyName={post.body}
                />
              </div>)

            })}

          </div>
        </div>

        {/* {posts.map(album => album.title)} */}
        {/* <Card posts.userId/>
        {JSON.stringify(posts)} */}
      </div>
    )
  }
}
