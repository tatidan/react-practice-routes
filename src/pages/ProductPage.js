import React from "react";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import withState from "../components/hoc/withState";
import Navigation from "../components/navigation/Navigation";
import { productRoutes } from "../routes/ProductRoutes";

const ProductPage = ({ match, location, history, newFunctions }) => {
  return (
    <div>
      <button
        type="button"
        on
        Click={() => newFunctions.addNewData({ id: 1, name: "Milk" })}
      >
        Add item
      </button>
      <Navigation routes={productRoutes} url={match.url} />
      <ContentSwitcher routes={productRoutes} path={match.path} />
    </div>
  );
};

export default withState(ProductPage);
