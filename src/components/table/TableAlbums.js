import React, { Component } from 'react'
import { retornaAlbumUsers } from '../../helpers/getData'
import TableRows from './TableRows'
/* import css from './table.module.css' */

export default class TableAlbums extends Component {

  constructor() {
    super()
    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    const albums = retornaAlbumUsers()
    albums.then(res => {
      this.setState({
        albums: res
      })
    })

  }

  render() {
    const { albums } = this.state
    return (
      <div className='bg-light pt-5'>

        <div className='container' >
          <table className="table table-hover text-center">
            <thead  >
              <tr >
                <th  > {this.props.id}</th>
                <th >{this.props.userId}</th>
                <th  >{this.props.userName}</th>
                <th className="text-left">{this.props.albumTitle}</th>
              </tr>
            </thead>
            <tbody>

              {albums.map((album => {
                return <TableRows id={album.id} userId={album.userId} userName={album.userName} albumTitle={album.title} />

              }))}
            </tbody>
          </table>

        </div >
      </div>
    )
  }
}
