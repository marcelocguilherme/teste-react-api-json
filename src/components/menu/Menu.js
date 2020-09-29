import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import css from './menu.module.css'
import TableAlbums from '../table/TableAlbums'

import logo from '../../assets/img/logo_uniss_2020.svg';
import CardsPosts from '../cards/CardsPosts';
import CardsToDos from '../cards/CardsToDos';


export default class Menu extends Component {
  render() {
    return (

      <Router>

        <div className={css.corMenu}>


          <nav className="navbar navbar-expand-lg navbar-dark " >
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link active" to="/Albums">
                  Albuns
                </Link>
                <Link className="nav-link active" to="/Posts">
                  Posts
                </Link>
                <Link className="nav-link active" to="/todos">
                  To Do
                </Link>





              </div>
            </div>
          </nav>
          <hr />

          <Switch>
            <Route path="/Albums">
              <Albums />
            </Route>
            <Route path="/Posts">
              <Posts />
            </Route>
            <Route path="/ToDos">
              <ToDos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}
function Home() {
  return <div className=' text-dark mt-5 pt-5'>
    <h2 className="text-center"> Teste de React + API JSON</h2>
    <h3 className="text-center">
      Marcelo César Guilherme
    </h3>

  </div>
}

function Albums() {

  return <TableAlbums id='Cod.' userId='Cod. Usuário' userName='Nome Usuário' albumTitle='Título do Album' />


}

function Posts() {

  return <CardsPosts />


}

function ToDos() {

  return <CardsToDos />


}

