import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LogoImg from '../../pieces/Logo'
import '../../../scss/main.scss'

export default class MainNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top" className="main-nav-bar">
                <Navbar.Brand><LogoImg /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Premier League" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/" className="white-text">
                                Home
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/fixture" className="white-text">
                                Fixture
                            </NavDropdown.Item>
                            <NavDropdown.Item Link to="/result" className="white-text">
                                Results
                                </NavDropdown.Item>
                            <NavDropdown.Item href="/tables" className="white-text">
                                Tables
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#transfer" className="white-text">Transfer</NavDropdown.Item> */}
                            <NavDropdown.Item href="/player" className="white-text">
                                Players
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#history" className="white-text">History</NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <Nav.Item>
                                <NavDropdown.Item href="/admin/players" className="white-text">
                                    Add & update players
                                        </NavDropdown.Item>
                                <NavDropdown.Item href="/admin/fixture" className="white-text">
                                    Fix fixture
                                        </NavDropdown.Item>
                                <NavDropdown.Item  className="white-text">
                                    Update results
                                        </NavDropdown.Item>
                            </Nav.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#usernames" style={{ color: "white" }}>Username</Nav.Link>
                        <Nav.Link eventKey={3} style={{ color: "white" }}>
                            <Link to="/login">Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}