import React from "react";
import { mainRoutes } from "../../routes/MainRoutes";
import Navigation from "../navigation/Navigation";
import { Headerstyled } from "./HeaderStyled";
import { Link, withRouter } from "react-router-dom";

const Header = ({ location }) => {
  return (
    <Headerstyled>
      <Link
        to={{
          pathname: "/",
          state: { from: location.pathname },
        }}
      >
        Home
      </Link>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
    </Headerstyled>
  );
};

export default withRouter(Header);
