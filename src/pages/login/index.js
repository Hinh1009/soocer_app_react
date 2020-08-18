import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { Card, Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Header from '../../components/parts/Header'
import Footer from '../../components/parts/Footer'
// import './login.css'
const HOMEPAGE = 'http://localhost:3000/'


class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handlePassWord = (e) => {
    e.preventDefault()
    let newPassword = e.target.value
    this.setState({
      password: newPassword
    })
  }
  handleEmail = (e) => {
    e.preventDefault()
    let newEmail = e.target.value
    this.setState({
      email: newEmail
    })
  }
  handleClick = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user)
    Axios.post('http://localhost:1900/api/auth/sign-in', user)
      .then(res => {
        // console.log("res data", res.data)
        localStorage.setItem("user", JSON.stringify(res.data))
        window.location.href = HOMEPAGE
      })
      .catch((err) => {
        alert("Login failed", err)
      })
  }
  onFinish = (values) => {
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
            Login
      </div>

          <Form
            // id="components-form-demo-normal-login"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="userEmail"
              rules={[
                {
                  required: true,
                  message: 'Please input your User Email!',
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
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={this.handlePassWord}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleClick}>
                Log in
        </Button>
            </Form.Item>

            <Form.Item>
              <Link to="/register">Not have an account? Register now</Link>
            </Form.Item>

          </Form>
        </Card>
        <Footer />
      </div>

    );
  }
}

export default login;