import React, { Component, useState, useContext , useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Layout,
  Menu,
} from "antd";
import styles from "./Login.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import UserContext from "../../../context/user/userContext";

const { Sider } = Layout;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 26,
  },
};
const Login = (props) => {
  const userContext = useContext(UserContext);

  const { isAuth  } = userContext


  //Route User according to Admin Status
  useEffect(() => {
    if (isAuth && userContext.user !== null) {

      if(userContext.user.admin === "state"){
        props.history.push('/stateAdmin')
      }

    }
    // eslint-disable-next-line
  }, [isAuth , userContext.user]);


  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    userContext.login(user, props.history);
    console.log(user);
    // props.history.push('/stateAdmin')
  };

  const cardStyle = {
    width: "80%",
    margin: "auto",
  };

  return (
    <>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Row>
          <Col span={8}></Col>
          <Col span={8} >
            <Card title="Login" style={cardStyle} className={styles.card}>
              <Form
                name="login"
                {...layout}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="email id"
                  rules={[
                    {
                      type: "email",
                      message: "Please input valid Email ID:",
                    },
                  ]}
                >
                  <Input
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={styles.input}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email ID"
                  />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    name="password"
                    value={password}
                    onChange={onChange}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                    type="password"
                  />
                </Form.Item>
                {/* <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <a href="">Forgot password</a>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={8}></Col>
        </Row>
      </Layout>
    </>
  );
};

export default Login;
