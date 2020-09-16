import React, { Component } from 'react'
/* import css from './table.module.css' */

export default class TableRows extends Component {
  render() {

    return (


      <tr >
        <td  >{this.props.id}</td>
        <td >{this.props.userId}</td>
        <td >{this.props.userName}</td>
        <td className="text-left">{this.props.albumTitle}</td>
      </tr>




    )
  }
}

