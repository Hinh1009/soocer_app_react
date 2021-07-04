import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CBroadcast from '../../components/parts/FixtureBroadcasts'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'

class Fixture extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle>Epl Fixture & Result</CTitle>
                    <CSpacer></CSpacer>
                    <CBroadcast></CBroadcast>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Fixture