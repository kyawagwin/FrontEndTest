import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

import { AuthContext } from "../context/AuthProvider";

import "./SiteLayout.css";

const { Header, Footer, Content } = Layout;

const SiteLayout = ({ children }) => {
  const { loggedIn, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <Layout>
      <Header>
        <div className="logo">EzySign</div>
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["0"]}>
          <Menu.Item key="0">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          {loggedIn ? (
            <Menu.Item key="2">
              <a onClick={handleLogout}>Log out</a>
            </Menu.Item>
          ) : (
            <Menu.Item key="1">
              <NavLink to="/login">Log in</NavLink>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content className="content">{children}</Content>
      <Footer>&copy;EzySign</Footer>
    </Layout>
  );
};

export default SiteLayout;
