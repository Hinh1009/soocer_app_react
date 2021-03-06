import React, { Component } from 'react'
import Header from '../../../components/parts/Header'
import Footer from '../../../components/parts/Footer'
import CTitle from '../../../components/pieces/Title'
// import CSpacer from '../../../components/pieces/Spacer'
import AddMatch from '../../../components/parts/AddFixturesAndResults'

class AddFixture extends Component {

    render() {
        return (
            <div>
                <Header />
                
                <div className="container">
                <CTitle>Add fixtures</CTitle>
                    {/* <CSpacer /> */}
                    <AddMatch />
                </div>
                <Footer />
            </div>
        )
    }
}

export default AddFixture