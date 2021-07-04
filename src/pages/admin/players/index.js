import React, { Component } from 'react'
import Header from '../../../components/parts/Header'
import Footer from '../../../components/parts/Footer'
import CTitle from '../../../components/pieces/Title'
// import CSpacer from '../../../components/pieces/Spacer'
import AddPlayer from '../../../components/parts/AddPlayer'

class AddPlayers extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <CTitle>Add players</CTitle>
                    <AddPlayer />
                </div>
                <Footer />
            </div>
        )
    }
}

export default AddPlayers