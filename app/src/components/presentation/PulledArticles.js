import React, { Component } from "react";
import DisplaySection from "../container/DisplaySection.js";

class PulledArticles extends Component {
  state = {};
  render() {
    return (
      <DisplaySection title={"Search Results"}>
        <h1> {JSON.stringify(this.props.displayArticles)} </h1>
      </DisplaySection>
    );
  }
}

export default PulledArticles;
