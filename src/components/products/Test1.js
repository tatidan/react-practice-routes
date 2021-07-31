import React from "react";
import withState from "../hoc/withState";

const Test1 = ({ message }) => {
  return (
    <div>
      <h2>Рендер Test1 про hoc</h2>
      <p>{message}</p>
      <p>{this.props.data}</p>
    </div>
  );
};

export default withState(Test1);
