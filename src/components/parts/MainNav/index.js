import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LogoImg from '../../pieces/Logo'
import '../../../scss/main.scss'

export default class MainNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" className="main-nav-bar">
                <Navbar.Brand href="#home"><LogoImg /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Premier League" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#home" className="white-text">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#fixtures" className="white-text">Fixtures</NavDropdown.Item>
                            <NavDropdown.Item href="#results" className="white-text">Results</NavDropdown.Item>
                            <NavDropdown.Item href="#tables" className="white-text">Tables</NavDropdown.Item>
                            <NavDropdown.Item href="#transfer" className="white-text">Transfer</NavDropdown.Item>
                            <NavDropdown.Item href="#players" className="white-text">Players</NavDropdown.Item>
                            <NavDropdown.Item href="#history" className="white-text">History</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="EPL Fantasy" id="collasible-nav-dropdown">
                            <Nav>
                                <Nav.Item>
                                    <NavDropdown.Item href="#fantasy" className="white-text">Fantasy</NavDropdown.Item>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavDropdown.Item href="#fantasy-draft" className="white-text">Fantasy Draft</NavDropdown.Item>
                                </Nav.Item>
                            </Nav>
                        </NavDropdown>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <Nav>
                                <Nav.Item>
                                    <NavDropdown.Item href="#stats" className="white-text">Stats</NavDropdown.Item>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavDropdown.Item href="#about-us" className="white-text">About Us</NavDropdown.Item>
                                </Nav.Item>
                            </Nav>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#usernames" style={{color:"white"}}>Username</Nav.Link>
                        <Nav.Link eventKey={3} href="#logout" style={{color:"white"}}>Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}