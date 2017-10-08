import React, { Component } from "react";
import DisplaySection from "../container/DisplaySection.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.sendArticle = this.sendArticle.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeEnd = this.changeEnd.bind(this);
    this.search = { topic: "", start: "", end: "" };
    this.returnedArticles = {};
  }

  sendArticle() {
    const props = { ...this.props };
    props.searchTopic(this.search);
  }

  changeTopic(e) {
    this.search.topic = e.target.value;
  }
  changeStart(e) {
    this.search.start = e.target.value;
  }
  changeEnd(e) {
    this.search.end = e.target.value;
  }

  searchArticles() {
    // const nyt = keys.nyt;
    fetch(`/articlesearch`)
      .then(response => {
        console.log("STUFF WORKED THANK FUCK")
        // var contentType = response.headers.get("content-type");
        // if (contentType && contentType.includes("application/json")) {
        //   return response.json();
        // }
        // throw new TypeError("Oops, we haven't got JSON!");
      })
      .then(json => {
        // console.log(json);
        // this.setState({ json });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <DisplaySection title={"Search"}>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="card blue-grey lighten-1">
                <div className="input-field">
                  <input
                    id={"search_topic"}
                    type="text"
                    className="validate"
                    onChange={this.changeTopic}
                  />
                  <label className={"active topic"}>Topic</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card blue-grey lighten-1">
                <div className="input-field">
                  <input
                    id={"start_year"}
                    type="text"
                    className="validate"
                    onChange={this.changeStart}
                  />
                  <label className={"active startYear"}>Start Year</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card blue-grey lighten-1">
                <div className="input-field">
                  <input
                    id={"end_year"}
                    type="text"
                    className="validate"
                    onChange={this.changeEnd}
                  />
                  <label className={"active endYear"}>End Year</label>
                </div>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.searchArticles()}
            >
              Submit
            </button>
          </div>
        </div>
      </DisplaySection>
    );
  }
}

export default Search;
