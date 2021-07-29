import React from "react";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import Navigation from "../components/navigation/Navigation";
import { productRoutes } from "../routes/ProductRoutes";

const ProductPage = ({ match }) => {
  return (
    <div>
      <Navigation routes={productRoutes} url={match.url} />
      <ContentSwitcher routes={productRoutes} path={match.path} />
    </div>
  );
};

export default ProductPage;
