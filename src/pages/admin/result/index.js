import React, { Component } from 'react'
import CTitle from '../../../components/pieces/Title'
import CSpacer from '../../../components/pieces/Spacer'
import CBroadcast from '../../../components/parts/UpdateResult'
import Header from '../../../components/parts/Header'
import Footer from '../../../components/parts/Footer'

class UpdateResult extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle>Update Result</CTitle>
                    <CSpacer></CSpacer>
                    <CBroadcast></CBroadcast>
                </div>
                <Footer />
            </div>
        )
    }
}

export default UpdateResult