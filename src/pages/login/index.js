import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
const HOMEPAGE = 'http://localhost:3000/'

class login extends Component {
  state = {
    email: '',
    password: ''
  }
  handlePassWord = (e) => {
    e.preventDefault()
    let newPassword = e.target.value
    this.setState({
      password: newPassword
    })
  }
  handleEmail = (e) => {
    e.preventDefault()
    let newEmail = e.target.value
    this.setState({
      email: newEmail
    })
  }
  handleClick = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user)
    Axios.post('http://localhost:1900/api/auth/sign-in', user)
      .then(() => {
        // alert(`${this.state.email} login success`)
        window.location.href = HOMEPAGE
      })
      .catch((err) => {
        alert("Login failed", err)
      })
  }
  render() {
    return (
      <div>
        <div>Login</div>
        <input onChange={this.handleEmail} placeholder="Email" /> <br />
        <input onChange={this.handlePassWord} type="password" placeholder="Password" /> <br />
        <Link to="/register">Not have an account? Register now<br /></Link>
        <button onClick={this.handleClick}>Log in</button>

      </div>

    );
  }
}

export default login;