import React, { useContext } from "react";
import { Col, Layout, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../../context/user/userContext";

const { Header } = Layout;

function Navbar() {
  const userContext = useContext(UserContext);

  const layout = {
    float: "right",
  };
  const logo_style = {
    padding: "0px 0px 0px 25px",
    position: "absolute",
  }; const text_logo_style = {
    padding: "15px 0px 0px 30px",
    position: "absolute",
  };
  return (
    <Row>
      <Col span={2} />
      <Col span={20}>
        <Row>
          <Col lg={2}>
            <img
              src="assets\images\logo_BSM.png"
              height="128px"
              style={logo_style}
            />
          </Col>
          <Col lg={4}>
            <img
              src="assets\images\text.png"
              height="50px"
              style={text_logo_style}
            />
          </Col>
        </Row>

        <Header style={{ backgroundColor: '#b8b8b8', height: '60px' }}></Header>
        <Header>
          {userContext.isAuth === true && userContext.user ? (
            <Menu
              style={layout}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={"/myMandals"}>My Mandals</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={`/userProfile/${userContext.user.id}`}>Profile</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/" onClick={userContext.logout}>
                  Logout
              </Link>
              </Menu.Item>
            </Menu>

          ) : (
              <>
                <Menu
                  style={layout}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/register">Register</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                </Menu>

              </>
            )}
        </Header>
      </Col>
      <Col span={2} />
    </Row>
  );
}

export default Navbar;
