import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");

    return (
      <>
        <h1>About US</h1>
        <h2>This is a prototype of About Us page</h2>
        <ProfileFunctionalComponent name={"Kunal"} />
        <Profile name={"Kunal"} />
      </>
    );
  }
}

export default About;
