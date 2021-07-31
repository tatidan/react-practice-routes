import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChuckName: "HomePage"*/)
    ),
  },
  {
    name: "products",
    path: "/products",
    exact: false,
    component: lazy(() =>
      import("../pages/ProductPage" /* webpackChuckName: "ProductPage"*/)
    ),
  },
  {
    name: "administration",
    path: "/admin",
    exact: false,
    component: lazy(() =>
      import("../pages/AdminPage" /* webpackChuckName: "AdminPage"*/)
    ),
  },
  {
    name: "cart",
    path: "/cart",
    exact: false,
    component: lazy(() =>
      import("../pages/CartPage" /* webpackChuckName: "CartPage"*/)
    ),
  },
  {
    name: "registration",
    path: "/registration",
    exact: false,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChuckName: "AuthPage"*/)
    ),
  },
  {
    name: "login",
    path: "/login",
    exact: false,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChuckName: "AuthPage"*/)
    ),
  },
  {
    name: "profile",
    path: "/profile",
    exact: false,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChuckName: "AuthPage"*/)
    ),
  },
];
