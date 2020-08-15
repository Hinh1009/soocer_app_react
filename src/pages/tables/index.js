import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CTable from '../../components/parts/Tables'
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'

class Table extends Component {
    render() {
        return (
            <div>
                <Header />
                <CTitle>Table</CTitle>
                <div className="container">
                    {/* <CTitle>Table</CTitle> */}
                    <CSpacer></CSpacer>
                    <CTable></CTable>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Table