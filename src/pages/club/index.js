import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'
import ClubList from '../../components/parts/ClubList'

class Club extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle>Clubs</CTitle>
                    <CSpacer />
                    <ClubList />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Club