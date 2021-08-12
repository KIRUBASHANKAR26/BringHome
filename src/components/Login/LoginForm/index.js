import React, { useState,useRef } from 'react';
import { Form, Input, Checkbox } from 'antd';
import styled from 'styled-components';
import './style.css';
import { LockOutlined,UnlockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';



const CreatefreeAccount = styled.button`
   display: inline-block;
   background: #162734;
   padding:0.5rem 2rem;
   color:#fff;
   border:none;
   cursor:pointer;
   margin-top:2rem
`
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Loginform = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [form] = Form.useForm();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handelshowPassword = () => {
    setshowPassword(!showPassword);
  }
    
  const handelsubmit = (e) => {
    alert("click")
    e.preventDefault();
    setshowPassword(!showPassword);
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
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
        <Input ref={ emailRef } placeholder="E-mail"/>
      </Form.Item>
      <Form.Item
        placeholder="Password"
         name="password"
         rules={[
           {
             required: true,
             message: 'Please input your password!',
           },
         ]}>
         <div className="showPassword-wrapper">
             <Input ref={ passwordRef }type={showPassword ? "text" : "password"} placeholder="Password"/>
             <span className="showPassword" onClick={handelshowPassword}>
                 {
                     showPassword?<UnlockOutlined/>:<LockOutlined/>
                 }
             </span>
         </div>
       </Form.Item>
       <Form.Item
        name="Terms of Service"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept Terms of Service')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox style={{lineHeight: "2"}}>
        I agree to Brinks Home<a href="/#"> Terms of Service</a>
        </Checkbox>
      </Form.Item>
      <Form.Item
        name="privacypolicy"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept Privacypolicy')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox style={{lineHeight: "2"}}>
        I accept Brinks Home use of my data for the service and everything else described in the <a href="/#"> Privacy Policy</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
      <CreatefreeAccount type="submit" onSubmit={handelsubmit}>
          Create my free account
      </CreatefreeAccount>
      </Form.Item>
    </Form>
  );
};

export default Loginform;










