import React from "react";
import { mainRoutes } from "../../routes/MainRoutes";
import Navigation from "../navigation/Navigation";
import { Headerstyled } from "./HeaderStyled";
import { withRouter } from "react-router-dom";

const Header = ({ location }) => {
  return (
    <Headerstyled>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
    </Headerstyled>
  );
};

export default withRouter(Header);
