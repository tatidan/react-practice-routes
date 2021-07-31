import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const ContentSwitcher = ({ routes, path = "" }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default ContentSwitcher;

//вместо loading... поставить Loader or Spinner
