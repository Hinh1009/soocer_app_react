import React, { Component } from 'react'
import Logo from '../../assets/img/logo-epl.png'
import '../../scss/main.scss'

export default class LogoImg extends Component {
    render() {
        return (
            <a href="/" style={{ display: "inline-block" }} >
                <img src={Logo} width="100" height="100"  className="logo" alt="description"></img>
            </a>
        )
    }
}