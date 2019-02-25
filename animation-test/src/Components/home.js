import React, { Component } from "react";
import { navigate } from "@reach/router";

export default class home extends Component {
  state = {
    currentRoute: this.props.location.pathname
  };

  componentDidUpdate = () => {
    console.log("state updated: ", this.state);
  };

  setCurrentRouteState = route => {
    this.setState({
      currentRoute: route
    });
  };

  navigateTo = e => {
    const id = e.target.id;
    if (id === "/") {
      navigate("/listing");
      this.setCurrentRouteState("/listing");
    } else if (id === "/listing") {
      navigate("/");
      this.setCurrentRouteState("/");
    }
  };

  // If ever you were going to create some dope page transitions.
  // This would be the ideal way to set it up.
  render() {
    const {
      currentRoute,
      location: { pathname }
    } = this.props;
    return (
      <div>
        {currentRoute === "/" ||
          (pathname === "/" && (
            <h1 id="/" onClick={this.navigateTo}>
              Home
            </h1>
          ))}
        {currentRoute === "/listing" ||
          (pathname === "/listing" && (
            <h1 id="/listing" onClick={this.navigateTo}>
              Listing
            </h1>
          ))}
      </div>
    );
  }
}
