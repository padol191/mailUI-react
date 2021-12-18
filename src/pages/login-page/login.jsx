import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Form, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;
const LoginPage = ({ onLoginClick, loginError }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  return (
    <div className="login-page">
    <div className="login-box">
      <div className="illustration-wrapper">
        <img src="https://imgproxy.epicpxls.com/3Cu8ta4_rmJzF2Uiby76mmwPsvwtGiaqoIzuSGRJrKQ/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9hYmM1NmNl/Yjk0NTgyNTIxMGI0/OTQ3MTFhYjE2NDAx/NQ.jpg" alt="Login"/>
      </div>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
    
      >
        <p className="form-title">Welcome</p>
        <p>Login to the Mail Dashboard</p>
        <p>email: admin@gmail.com   pass:admin123</p>
        <p>email: test1@gmail.com   pass:test123</p>
        <FormItem
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            placeholder="Username"
            value={username} onChange={event => setUsername(event.target.value)}/>
        </FormItem>

        <FormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            placeholder="Password"
            value={password} onChange={event => setPassword(event.target.value)}/>
        </FormItem>

        {
        loginError && <div data-testid='login-error'>{loginError}</div>
      }

        <FormItem>
          <Button data-testid='login-btn' type="primary" htmlType="submit" onClick={onLoginClick.bind(this, username, password)} className="login-form-button">
            LOGIN
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
  )
}

export default LoginPage;
