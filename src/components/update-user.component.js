import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditUser extends Component {
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

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
    console.log(e.target.value);
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(this);

    // const user = {
    //   username: this.state.username,
    //   desc: this.state.desc,
    // }

    // console.log(user);

    // axios.post('http://localhost:5000/users/update/' + this.props.location.pathname.slice(8,this.props.location.pathname.length), user)
    //   .then(res => console.log(res.data));

    window.location = '/del';
  }

  render() {
    return (
      <div>
<h3>Edit Exercise Log</h3>
<form onSubmit={this.onSubmit}>
  <div className="form-group"> 
    <label>Número de ingressos: </label>
    <input  type="text"
        ref="userInput"
        required
        className="form-control"
        value={this.state.username}
        onChange={this.onChangeUsername}
        />
  </div>
  <div className="form-group">
    <label>Sessão: </label>
    <input 
        type="text" 
        className="form-control"
        value={this.state.desc}
        onChange={this.onChangeDesc}
        />
  </div>
  <div className="form-group">
    <input type="submit" value="Editar ingresso" className="btn btn-primary" />
  </div>
</form>
</div>
    )
  }
}