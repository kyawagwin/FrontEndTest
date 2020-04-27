import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  { path: "/login", component: Login },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, exact = false }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  );
};

export default Routes;
