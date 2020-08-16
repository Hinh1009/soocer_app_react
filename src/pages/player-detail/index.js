import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import Axios from 'axios'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'

class PlayerDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle></CTitle>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PlayerDetail

