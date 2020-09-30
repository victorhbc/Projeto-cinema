import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.pathname.slice(8,this.props.location.pathname.length));

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    
    this.state = {
      username: '',
      desc: ''
    }
  }

  componentDidMount() {
    console.log(this.props.location.pathname.slice(8,this.props.location.pathname.length));
    axios.get('http://localhost:5000/users/'+this.props.location.pathname.slice(8,this.props.location.pathname.length))
      .then(response => {
        this.setState({
          username: response.data.username,
          desc: response.data.desc,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
    // console.log(e.target.value);
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // console.log(event.target.username.value)
    // console.log(event.target.desc.value)

    const user = {
      username: event.target.username.value,
      desc: event.target.desc.value,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/update/' + this.props.location.pathname.slice(8,this.props.location.pathname.length), user)
      .then(res => console.log(res.data));


    console.log(this.props.location.pathname.slice(8,this.props.location.pathname.length));

    window.location = '/del';
  }

  render() {
    return (
      <div>
  <h3>Editar ingresso </h3>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group"> 
      <label>Nome: </label>
      <input
        type="text"
        name="username"
        className="form-control"
        value={this.state.username}
        onChange={this.onChangeUsername}
        ref={node => (this.inputNode = node)}
        />
    </div>
    <div className="form-group">
    <label>Descrição: </label>
    <input 
      type="text"
      name="desc"
      className="form-control"
      value={this.state.desc}
      onChange={this.onChangeDesc}
      ref={node => (this.inputNode = node)}
        />
    </div>
    
    <div className="form-group">
      <button type="submit" className="btn btn-primary">Atualizar</button>
    </div>

  </form>
</div>
    )
  }
}