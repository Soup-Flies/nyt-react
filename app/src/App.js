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
    this.state = { currentSearch: {}, returnedArticles: {} };
  }

  searchTopic(search) {
    console.log(search);
    this.setState({ currentSearch: search });
  }

  searchArticles(search) {
    console.log(search);
    fetch(`/articlesearch`, {
      headers: {
        "content-type": 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(search)
    })
      .then(response => {
        console.log("STUFF WORKED THANK FUCK", response)
        return response.json();
      })
      .then(json => {
        console.log(json);
        // this.setState({ json });
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
        <PulledArticles displayArticles={this.state.currentSearch} />
      </div>
    );
  }

  componentDidMount() {
    //return saved articles?? need react-router at some point
  }
}

export default App;
