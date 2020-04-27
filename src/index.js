import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import Routes from "./router";

import "antd/dist/antd.css";

import * as serviceWorker from "./serviceWorker";

const { Header, Footer, Content } = Layout;

const App = () => (
  <Layout>
    <Header>EzySign</Header>
    <Content>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Content>
    <Footer>&copy;EzySign</Footer>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
