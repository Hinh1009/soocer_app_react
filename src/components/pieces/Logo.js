import React, { Component } from 'react'
import Logo from '../../assets/img/logo-epl.png'
import '../../scss/main.scss'

export default class LogoImg extends Component {
    render() {
        return (
            <a href="#home" style={{ display: "inline-block" }} >
                <img src={Logo} width="100" height="100"  className="logo"></img>
            </a>
        )
    }
}