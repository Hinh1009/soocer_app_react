import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Layout } from 'antd'
import '../../App.css'
// import Button from '../../components/pieces/Button'
const { Header, Footer, Sider, Content } = Layout
class Home extends Component {

    render() {
        return (
            <Layout>
                <Header>
                    <Link to="/Login">
                        <Button type="dashed">Log in</Button>
                    </Link>
                </Header>
                <div className="container">
                    <Layout>
                        <Sider
                            id="sider-home"
                            style={{
                                flex: '0 0 300px',
                                width: '300px',
                                maxWidth: '300px',
                                color: "white",
                                textAlign: "center"
                            }}
                        >
                            Table and fixture
                    </Sider>
                        <Content>
                            <ul>
                                <li>
                                    <Link to="/player"> Player Info</Link>
                                </li>
                                <li>
                                    <Link to="/table"> Table</Link>
                                </li>
                                <li>
                                    <Link to="/fixture"> Fixture</Link>
                                </li>
                            </ul>


                        </Content>

                    </Layout>

                </div>

                <Footer>This is Footer</Footer>
            </Layout>
        )
    }
}

export default Home