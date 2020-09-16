import React, { Component } from 'react'

export default class CardToDo extends Component {
  render() {
    return (
      <div >

        <div className="card px-2 my-2" style={{ width: "18rem", height: "150px", }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.id} | {this.props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Atribuido a: {this.props.userName}</h6>

            <div className="custom-control custom-switch">
              <input type="checkbox" value={this.props.complete === true ? 'checked' : ''} className='custom-control-input' id={this.props.id} />
              <label className='custom-control-label'  > {this.props.completed == true ? 'Concluido' : 'Pendente'}</label>
            </div>













          </div>
        </div>

      </div >
    )
  }
}
