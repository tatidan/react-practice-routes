import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  // componentDidMount() {
  //   this.props.history.push({
  //     pathname: "/login",
  //     hash: "hello",
  //     state: {
  //       from: this.props.location.pathname,
  //     },
  //   });
  // }

  state = {};
  render() {
    return (
      <>
        <Header />
        <Link
          to={{
            pathname: "/login",
            state: { from: this.props.location.pathname },
          }}
        >
          Login
        </Link>

        <Main />
      </>
    );
  }
}

export default withRouter(App);
