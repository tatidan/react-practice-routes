import React from "react";

const withFetch = (WrappedComponent) => () => {
  return class withFetch extends React.Component {
    async componentDidMount() {
      console.log(this.props);
    }

    render() {
      return <></>;
    }
  };
};

export default withFetch;
