import React from "react";

class LifeCycleShort extends React.Component {
  constructor(props) {
    // one time
    super(props);
    this.state = {
      task: "intial",
    };
    console.log("Constructor was called. ");
  }

  componentDidMount() {
    // one time when UI first appears on screen
    console.log("Component Did Mount was called. ");
  }
  componentWillUnmount() {
    //one time when component is about to get removed from screen
    // can be used as finanlize in java => closing connections, clean up
    console.log("Component Will UnMount was called. ");
  }
  componentDidUpdate() {
    //multiple times -> at every re-render
    console.log("Component Did Update was called. ");
  }

  render() {
    //multiple time => whenever state changes
    return (
      <React.Fragment>
        <p>{this.state.task}</p>
        <button
          onClick={() => {
            this.setState({
              task: "Changed!",
            });
          }}
        >
          Click
        </button>
      </React.Fragment>
    );
  };
}

export default LifeCycleShort;
