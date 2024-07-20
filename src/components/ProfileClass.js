import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child - Constructor / Initialization");
  }

  componentDidMount() {
    console.log("Child - componentDidMount");
  }

  render() {
    const { count } = this.state;

    console.log("Child - Render function");

    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Profile;
