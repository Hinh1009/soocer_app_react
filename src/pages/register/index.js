import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
class Register extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }
    handlePassword = (e) => {
        let newPassword = e.target.value
        this.setState({
            password: newPassword
        })
    }
    handleEmail = (e) => {
        let newEmail = e.target.value
        this.setState({
            email: newEmail
        })
    }
    handleName = (e) => {
        let newName = e.target.value
        this.setState({
            name: newName
        })
    }
    handleSubmit = () => {
        let user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }

        Axios.post('http://localhost:1900/api/auth/sign-up', user)
            .then((mess) => {
                alert("Register success", mess)
            })
            .catch((err) => {
                alert("Register failed", err)
            })
    }


    render() {
        return (
            <div>
                <div>Register</div>
                <input onChange={this.handleEmail} placeholder="Email" /><br />
                <input onChange={this.handlePassword} placeholder="Password" /><br />
                <input onChange={this.handleName} placeholder="Name" /><br />
                <Link to="/login">Already have an account? Login<br /></Link>
                <button onClick={this.handleSubmit}> Register </button>
            </div>
        )

    }

}
export default Register