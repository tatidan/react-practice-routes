import React, { Component } from "react";
// import axios from "axios";

class Test extends Component {
  state = {
    data: null,
  };

  // async componentDidMount() {
  //   console.log(`match.params.id`, this.props.match.params.id);
  //   const result = await axios.get(`URL/${this.props.match.params.id}.json`);
  //   console.log(`result`, result);
  //   this.setState({ data: result.data.data });
  // }
  render() {
    return <h2>Тест</h2>;
  }
}

export default Test;
