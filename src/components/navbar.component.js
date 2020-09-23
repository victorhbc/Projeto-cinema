import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cinema sistema</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
            <Link to="/" className="nav-link">Ingressos Vendidos</Link>
          </li> */}
          {/* <li className="navbar-item">
            <Link to="/create" className="nav-link">Vender Ingresso</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Cadastrar Filme</Link>
          </li>
          <li>
            <Link to="/del" className="nav-link">Editar filme</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}