import React, { Component } from "react";
import "./App.css";
import Header from "./components/container/Header.js";
import Search from "./components/presentation/Search.js";
import PulledArticles from "./components/presentation/PulledArticles.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchTopic = this.searchTopic.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
    this.state = { currentSearch: {}, returnedArticles: [] };
  }

  searchTopic(search) {
    this.setState({ currentSearch: search });
  }

  searchArticles(search) {
    fetch(`/articlesearch`, {
      headers: {
        "content-type": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(search)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ returnedArticles: data.response.docs });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search searchTopic={this.searchArticles} />
        <PulledArticles returnedArticles={this.state.returnedArticles} />
      </div>
    );
  }
}

export default App;
