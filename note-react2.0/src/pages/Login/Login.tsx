import { NavLink, Navigate  } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createRef, useEffect, useState } from 'react';
// import InfoConveyer, { BFileManager } from '../Editor/InfoConveyer/InfoConveyer';
// import styles from './Login.module.css'
// import BgImage from '../../../public/logo192.png'

export default function  Login(){
  const [show, setShow] = useState(true)
  const [logined, setLogined] = useState(false)
  const [remember, setRemember] = useState(true)
  const username = createRef()
  const password = createRef()

  // useEffect(()=>{
  //   if(logined===false){
  //     setShow(true)
  //   }
  // }, [logined])
  
    //   const onFinish = (values) => {
    //     // console.log('Received values of form: ', values);
    //     const cb = (rlt) => {
    //       let userInfo = null
    //       // BFileManager.addLog([values['username']])
    //       if(rlt.length){
    //         userInfo = rlt[0]
    //       }
    //       if(userInfo&&userInfo['username']==username.current.input.value){
    //         if(userInfo['password']==password.current.input.value){
    //           if(remember!==userInfo['remember']){
    //             BFileManager.updateUserInfo([{remember: remember}])
    //           }
    //           if(remember){
    //             BFileManager.updateSetting([{recent: userInfo['username']}])
    //           }

    //           setLogined(true)
    //           InfoConveyer.pyApi.username = userInfo['username']
    //         }
    //         else{
    //           message.warn('password error', 0.8)
    //         }
    //       }
    //       else{
    
    //         message.warn('user is not exit', 1.8)
    //       }
    //     }

    //     BFileManager.getUserInfo(username.current.input.value, cb)

    //   };

    //   const onRegister = values => {
    //     if(username.current.input.value == ''){
    //       message.warn('username is empty', 0.8)
    //       return
    //     }
    //     // console.log(username.current.input.value, password.current.input.value, remember)
    //     const cb1 = (rlt) => {
    //       if(rlt.length){
    //         message.warn('user is exited', 0.8)
    //       }else{
            
    //       BFileManager.makeUser([{username: username.current.input.value, password: password.current.input.value, remember:remember}], cb2)
    //       }
    //     }

    //     const cb2 = (rlt) => {
    //       if(rlt){
    //         setLogined(true)
    //         message.success('success', 1.2)
    //       }else{
    //         message.success('python error', 1.2)
    //       }
    //     }

        
    //     BFileManager.getUserInfo(username.current.input.value, cb1)
    //   }

    //   InfoConveyer.pyApi.loginPage = (e) => {
    //     if(e===true){
    //       setLogined(true)
    //     }else{
    //       setShow(true)
    //     }
    //   }

  if(logined){
    return <Navigate to="/home" />
  }
  
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height: '100%', opacity: 0.8, 
    backgroundImage: "url("+process.env.PUBLIC_URL + '/logo192.png)', backgroundSize:'cover', backgroundPosition: '50% 50%'}}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        style={{display: show?"initial":"none", marginBottom: '200px', borderRadius: '15px', backgroundColor:'whitesmoke', padding: '20px 20px 0 20px'}}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
          // @ts-ignore
          ref={username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            // @ts-ignore
           ref={password}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            {/* <Checkbox onChange={setRemember} value={remember}>Remember me</Checkbox> */}
            <Checkbox value={remember}>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Space>
          {/* <Button type="primary" onClick={onFinish} className="login-form-button"> */}
          <Button type="primary" className="login-form-button">
            Log in
          </Button>
          {/* <Button onClick={onRegister} >register</Button> */}
          <Button >register</Button>
          </Space>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </div>
  );
};



