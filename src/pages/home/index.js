import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Header> THis is header</Header>
                <Content> This is content</Content>
                <Footer>This is Footer</Footer>
            </Layout>
        )
    }
}

export default Home