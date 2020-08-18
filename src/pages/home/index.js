import React, { Component } from 'react'
import '../../App.css'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer';

// import Button from '../../components/pieces/Button'

class Home extends Component {
    constructor(props) {
        super(props)
        const user = JSON.parse(localStorage.getItem('user')) || null
        this.state = {
            user: user
        }
    }
    render() {
        // if (!this.state.user) {
        //     window.location.href = "/login"
        // }

        return (
            <div>
                <Header />
                <div className="container"></div>
                <Footer />
            </div>
        )
    }
}

export default Home