import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CTableGroup from '../../components/parts/TableGroups'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'

class Player extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle>Player Info</CTitle>
                    <CSpacer></CSpacer>
                    <CTableGroup></CTableGroup>
                   
                </div>
                <Footer />
            </div>


        )
    }
}

export default Player