import React from "react";
import { useLocation } from "react-router-dom";
import withFetch from "../hoc/withFetch";
import withState from "../hoc/withState";

const Tools = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>Tools</h2>
    </div>
  );
};

export default withState(withFetch(Tools));
