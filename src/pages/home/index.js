import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Layout } from 'antd'
import Sider from 'antd/lib/layout/Sider'
// import Button from '../../components/pieces/Button'

const { Header, Footer, Content } = Layout
class Home extends Component {

    render() {
        return (
            <Layout>
                <Header>
                    <Link to="/Login">
                        <Button type="dashed">Log in</Button>
                    </Link>
                </Header>
                <Layout>
                    <Content>
                        <span>
                            <Link to="/player">Player Info</Link>
                        </span>
                    </Content>
                    <Sider>Sider</Sider>
                </Layout>

                <Footer>This is Footer</Footer>
            </Layout>
        )
    }
}

export default Home