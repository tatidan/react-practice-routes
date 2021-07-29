import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "products",
    path: "/products",
    exact: false,
    component: ProductPage,
  },
  {
    name: "administration",
    path: "/admin",
    exact: false,
    component: AdminPage,
  },
  {
    name: "cart",
    path: "/cart",
    exact: false,
    component: CartPage,
  },
  {
    name: "registration",
    path: "/registration",
    exact: false,
    component: AuthPage,
  },
  {
    name: "login",
    path: "/login",
    exact: false,
    component: AuthPage,
  },
  {
    name: "profile",
    path: "/profile",
    exact: false,
    component: AuthPage,
  },
];
