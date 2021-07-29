import React from "react";
import { Route } from "react-router-dom";
import { mainRoutes } from "../../routes/MainRoutes";
import ContentSwitcher from "../contentSwitcher/ContentSwitcher";
import { MainStyled } from "./MainStyled";
import Test from "../Test";

const Main = () => {
  return (
    <main>
      <MainStyled>
        <ContentSwitcher routes={mainRoutes} />
        <Route path="/products/:id" component={Test} exact={false} />

        {/* {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} component={component} exact={exact} key={path} />
        ))} */}
      </MainStyled>
    </main>
  );
};

export default Main;
