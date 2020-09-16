import React, { Component } from 'react'
import Card from './Card'
import css from './cardsAlbum.module.css'
import { retornaToDosUsers } from '../../helpers/getData'
import CardToDo from './CardToDo'

export default class CardsToDos extends Component {

  constructor() {
    super()
    this.state = {
      toDos: []
    }
  }


  componentDidMount() {
    const toDos = retornaToDosUsers()

    toDos.then(res => {
      this.setState({
        toDos: res
      })
    })


  }

  render() {
    const { toDos } = this.state



    return (
      <div className={css.corCard}>



        <div className="container pt-5">

          <div className="row">
            {toDos.map(toDo => {
              return (<div className='col-md-3'>
                <CardToDo
                  id={toDo.id}
                  userId={toDo.userId}
                  userName={toDo.userName}
                  title={toDo.title}
                  completed={toDo.completed}
                />
              </div>)

            })}

          </div>
        </div>


      </div>
    )
  }
}
