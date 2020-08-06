import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import Button from '../../components/pieces/Button'

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
                <Content>
                    <ul>
                        <li><Link to="/player">Player Info</Link></li>
                    </ul>
                </Content>
                <Footer>This is Footer</Footer>
            </Layout>
        )
    }
}

export default Home