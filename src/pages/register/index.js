import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import {
    Form,
    Input,
    Button,
    Card
} from 'antd';
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

class Register extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }
    handlePassword = (e) => {
        let newPassword = e.target.value
        this.setState({
            password: newPassword
        })
    }
    handleEmail = (e) => {
        let newEmail = e.target.value
        this.setState({
            email: newEmail
        })
    }
    handleName = (e) => {
        let newName = e.target.value
        this.setState({
            name: newName
        })
    }
    handleSubmit = () => {
        let user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }

        Axios.post('http://localhost:1900/api/auth/sign-up', user)
            .then((mess) => {
                alert("Register success", mess)
            })
            .catch((err) => {
                alert("Register failed", err)
            })
    }




    onFinish = values => {
        console.log('Received values of form: ', values);
    }

    render() {
        return (
            <div>
                <Header />
                <Card
                    style={{
                        width: 340,
                        margin: 'auto',
                        marginTop: 64,
                        textAlign: "center"
                    }}
                    bordered={true}
                >
                    <div style={{ textAlign: 'center', marginBottom: 32, fontSize: 50 }}>
                        Register
      </div>
                    <Form
                        name="register"
                        className="register-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={this.handleEmail} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                onChange={this.handlePassword}
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                onChange={this.handlePassword}
                            />
                        </Form.Item>

                        <Form.Item
                            name="nickname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={this.handleName} />
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login"> Already have an account? Login now</Link>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                Register
                    </Button>
                        </Form.Item>
                    </Form >
                </Card>
                <Footer />
            </div>
        )

    }

}
export default Register