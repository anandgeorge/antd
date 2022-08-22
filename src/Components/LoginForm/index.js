import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const LoginForm = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Form layout="inline">
        <Form.Item label="">
          <Input
            style={{
              width: 300,
            }}
            size="large"
            // placeholder="johndoe@gmail.com"
            prefix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large">
            Get Magic Link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
