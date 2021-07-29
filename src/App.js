import React, { Component } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
