import React from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};

const Login = () => {
  const onFinish = ({ email, password }) => {
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        console.log(response, "response");
        const { token } = response.data;
      })
      .catch((error) => {
        console.log(error, "error");
        message.error("User not found");
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.info("Provide email and password");
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>Log in</h1>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
