import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CBroadcast from '../../components/parts/FixtureBroadcasts'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

class Fixture extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Header></Header>
                <Content className="container">
                    <CTitle>This is Epl Fixture</CTitle>
                    <CSpacer></CSpacer>
                    <CBroadcast></CBroadcast>
                </Content>
                <Footer></Footer>
            </Layout>
        )
    }
}

export default Fixture