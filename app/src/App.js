import React, { Component } from "react";
import "./App.css";
import Header from "./components/container/Header.js";
import Search from "./components/presentation/Search.js";
import PulledArticles from "./components/presentation/PulledArticles.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTopic = this.searchTopic.bind(this);
    this.state = { currentSearch: {}, returnedArticles: {} };
  }
  searchTopic(search) {
    this.setState({ currentSearch: search });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search searchTopic={this.searchTopic} />
        <PulledArticles displayArticles={this.state.currentSearch} />
      </div>
    );
  }

  componentDidMount() {
    //return saved articles?? need react-router at some point
  }
}

export default App;
