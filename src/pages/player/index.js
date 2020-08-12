import React, { Component } from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CTableGroup from '../../components/parts/TableGroups'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout
class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Header>This is Header</Header>
                <Content className="container">
                <div>
                    <CTitle>Player Info</CTitle>
                    <CSpacer></CSpacer>
                    <CTableGroup></CTableGroup>
                </div>
                </Content>
               <Footer>This is Footer</Footer> 
            </Layout>

        )
    }
}

export default Player