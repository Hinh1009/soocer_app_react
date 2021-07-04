import React, { Component } from 'react'
import '../../../scss/main.scss'
import Logo from '../../pieces/Logo'

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer">
                <div className="footer" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <h6>PREMIER LEAGUE </h6>
                                <div className="footer-logo-container">
                                    <Logo />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3">
                                <h6 id="contact">CONTACT </h6>
                                <ul>
                                    <li>
                                        <a className="email" href="/#">dinhhinh10091998@gmail.com </a>
                                        {/* <a className="email" href="#">nguyenhoantrung.1102@gmail.com </a> */}
                                        <a className="email" href="/#">Hanoi University of Science and Technology </a>
                                    </li>
                                    <br />
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-2 col-xs-3" id="last-col-container">
                                <ul>
                                    <li> <h5> <a href="/#about-us" id="last-col-1"> ABOUT US</a></h5></li>
                                    <li> <h5><a href="/#fantsy-scout" id="last-col-2"> FANTASY SCOUT </a> </h5></li>
                                    <li> <h5><a href="/#social-media" id="last-col-3"> SOCIAL MEDIA </a> </h5></li>
                                </ul>
                                <div className="rounded-social-buttons">
                                    <a className="social-button facebook" href="https://www.facebook.com/premierleague"><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-button youtube" href="https://www.youtube.com/premierleague"><i className="fab fa-youtube"></i></a>
                                    <a className="social-button twitter" href="https://twitter.com/premierleague"><i className="fab fa-twitter"></i></a>
                                    <a className="social-button instagram" href="https://www.instagram.com/premierleague/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <p className="pull-left copyright"> © PREMIER LEAGUE 2020. All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}




