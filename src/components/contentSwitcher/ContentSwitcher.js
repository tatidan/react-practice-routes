import React from "react";
import { Switch, Route } from "react-router-dom";

const ContentSwitcher = ({ routes, path = "" }) => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={path + route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Switch>
  );
};

export default ContentSwitcher;
