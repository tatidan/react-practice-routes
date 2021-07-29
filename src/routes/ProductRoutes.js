import Cars from "../components/products/Cars";
import Tools from "../components/products/Tools";
import Toys from "../components/products/Toys";

export const productRoutes = [
  {
    name: "toys",
    path: "/toys",
    exact: false,
    component: Toys,
  },
  {
    name: "tools",
    path: "/tools",
    exact: false,
    component: Tools,
  },
  {
    name: "cars",
    path: "/cars",
    exact: false,
    component: Cars,
  },
];
