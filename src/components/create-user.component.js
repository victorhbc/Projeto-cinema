import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      desc: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      desc: this.state.desc
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      desc: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Cadastrar novo filme</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome do Filme: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
            <label>Descrição do Filme: </label>
            <input  type="text"
                className="form-control"
                value={this.state.desc}
                onChange={this.onChangeDesc}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Adicionar filme" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}