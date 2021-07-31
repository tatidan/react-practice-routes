import React from "react";
import axios from "axios";

const withFetch = (WrappedComponent) => () => {
  return class withFetch extends React.Component {
    state = {
      data: [],
      liading: false,
      error: "",
    };

    async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get("URL");
      if (res.data) {
        this.setState({
          data: [
            ...Object.keys(res.data).map((item) => ({
              id: item,
              ...res.data[item],
            })),
          ],
        });
      }
    }

    render() {
      return (
        <>
          {this.state.loading ? (
            <h2>Loading...</h2>
          ) : (
            <WrappedComponent {...this.props} data={this.state.data} />
          )}
        </>
      );
    }
  };
};

export default withFetch;
