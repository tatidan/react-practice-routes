import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = ({ routes, url = "", prevPathname = "" }) => {
  return (
    <NavigationStyled>
      <ul className="navigationList">
        {routes.map(({ name, path, exact }) => (
          <li className="navigationItem" key={path}>
            <NavLink
              className="navigationLink"
              activeClassName="navigationLink--active"
              to={{ pathname: url + path, state: { from: prevPathname } }}
              exact={exact}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
