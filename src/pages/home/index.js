import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Button } from 'antd'

const { Header, Content, Footer } = Layout
class Home extends Component {
    
    render() {
        return (
            <Layout>
                <Header>
                    <div>This is my soccer app</div>
                    <Link to="/Login">
                        <Button>Log in</Button>
                    </Link>
                </Header>
                <Content> This is content</Content>
                <Footer>This is Footer</Footer>
            </Layout>
        )
    }
}

export default Home