import React, { Component } from 'react'
import '../../../scss/main.scss'
import Logo from '../../pieces/Logo'

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer">
                <div class="footer" id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <h6>PREMIER LEAGUE </h6>
                                <div className="footer-logo-container">
                                    <Logo />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-2 col-xs-3">
                                <h6 id="contact">CONTACT </h6>
                                <ul>
                                    <li>
                                        <a class="email" href="#">dinhhinh@gmail.com </a>
                                        <a class="email" href="#">nguyenhoantrung.1102@gmail.com </a>
                                        <a class="email" href="#">mindx.web37fullstack@gmail.com </a>
                                    </li>
                                    <br />
                                </ul>
                            </div>
                            <div class="col-lg-3 col-sm-2 col-xs-3" id="last-col-container">
                                <ul>
                                    <li> <h5> <a href="#about-us" id="last-col-1"> ABOUT US</a></h5></li>
                                    <li> <h5><a href="#fantsy-scout" id="last-col-2"> FANTASY SCOUT </a> </h5></li>
                                    <li> <h5><a href="#social-media" id="last-col-3"> SOCIAL MEDIA </a> </h5></li>
                                </ul>
                                <div class="rounded-social-buttons">
                                    <a class="social-button facebook" href="https://www.facebook.com/premierleague" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-button youtube" href="https://www.youtube.com/premierleague" target="_blank"><i class="fab fa-youtube"></i></a>
                                    <a class="social-button twitter" href="https://twitter.com/premierleague" target="_blank"><i class="fab fa-twitter"></i></a>
                                    <a class="social-button instagram" href="https://www.instagram.com/premierleague/" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="container">
                            <p class="pull-left copyright"> © PREMIER LEAGUE 2020. All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}




