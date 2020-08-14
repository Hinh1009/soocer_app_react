import React, { Component } from 'react'
import '../../App.css'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer';

// import Button from '../../components/pieces/Button'

class Home extends Component {

    render() {
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