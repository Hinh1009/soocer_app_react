import React, { Component } from 'react'
import CTitle from '../../../components/pieces/Title'
// import CSpacer from '../../../components/pieces/Spacer'
import Header from '../../../components/parts/Header'
import Footer from '../../../components/parts/Footer'
import AddTeam from '../../../components/parts/AddTeam'

class AddTeams extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <CTitle>Add team</CTitle>
                    {/* <CSpacer /> */}
                    <AddTeam />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AddTeams