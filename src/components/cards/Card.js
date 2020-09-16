import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div >

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.id} | {this.props.postTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Criado por: {this.props.userName}</h6>
            <p className="card-text">{this.props.postBodyName}</p>

          </div>
        </div>

      </div>
    )
  }
}
