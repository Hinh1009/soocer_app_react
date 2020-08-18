import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import LogoImg from '../../pieces/Logo'
import '../../../scss/main.scss'

export default class MainNav extends Component {
    constructor(props) {
        super(props)
        const user = JSON.parse(localStorage.getItem('user')) || null
        let isAdmin = false
        if (user) {
            if (user.admin === true) {
                isAdmin = true
            }
        }

        this.state = {
            user: user,
            isAdmin: isAdmin
        }
    }

    handleLogout = () => {
        localStorage.removeItem("user")
        window.location.reload(false)
        // window.location.href("/login")
    }

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
                                Fixture and Result
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/club" className="white-text">
                                Club
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
                        {(this.state.isAdmin) ?
                            <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                <Nav.Item>
                                    <NavDropdown.Item href="/admin/players" className="white-text">
                                        Add players
                                        </NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/fixture" className="white-text">
                                        Add fixture
                                        </NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/result" className="white-text">
                                        Update results
                                        </NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/teams" className="white-text">
                                        Add teams
                                        </NavDropdown.Item>
                                </Nav.Item>
                            </NavDropdown>
                            : null
                        }
                    </Nav>
                    <Nav>
                        {this.state.user && this.state.isAdmin ?
                            <Nav.Link eventKey={2} href="#usernames" style={{ color: "white" }}>Hello admin {this.state.user.name}</Nav.Link>
                            : null
                        }
                        {this.state.user && !this.state.isAdmin ?
                            <Nav.Link eventKey={2} href="#usernames" style={{ color: "white" }}>Hello {this.state.user.name}</Nav.Link>
                            : null
                        }
                        {this.state.user ?
                            <Nav.Link eventKey={2} href="#usernames" style={{ color: "white" }} onClick={this.handleLogout}>Logout</Nav.Link>
                            : null
                        }
                        {!this.state.user ?
                            <Nav.Link href="/login" eventKey={3} style={{ color: "white" }}>Login
                            </Nav.Link>
                            : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}