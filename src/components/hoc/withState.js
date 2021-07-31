import React, { Component } from "react";

const withState = (WrappedComponent) => {
  return class withState extends Component {
    state = {
      data: [],
      value: "Hello",
    };

    addNewData = (item) => {
      this.setState((prev) => ({ data: [...prev.data, item] }));
    };

    deleteItem = (id) => {
      this.setState((prev) => ({
        data: prev.data.filter((item) => item.id !== id),
      }));
    };

    render() {
      console.log(this.props);
      return (
        <WrappedComponent
          {...this.props}
          newState={this.state}
          newFunctions={{
            addNewData: this.addNewData,
            deleteItem: this.deleteItem,
          }}
        />
      );
    }
  };
};

export default withState;

//=======================
// contt hof = function (callBack) {
//   callBack()

// };

// const callBack = () => {
//   console.log("hello")
// };

// hof(callBack);

//=======================
// const hof = function () {
//   return function () {
//     console.log("hello");
//   };
// };

// const res = hof();
// res();

//=======================

// const hof = (message) =>
//   function (name) {
//     console.log(message + " " + name + "!");
//   };

// const res = hof("Hello");
// res(Alex);

//=======================
// пример корированной функции
//   const hof = (message) => (name) => console.log(message + " " + name + "!");

// const res = hof("Hello");
// res(Alex);

// hof("Hello")("Alex")
