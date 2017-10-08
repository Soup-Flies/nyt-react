import React, { Component } from "react";
import DisplaySection from "../container/DisplaySection.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.sendArticle = this.sendArticle.bind(this);
    this.changeTopic = this.changeTopic.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeEnd = this.changeEnd.bind(this);
    this.state = { topic: "", start: "", end: "" };
    this.returnedArticles = {};
  }

  sendArticle() {
    console.log(this.state);
    const props = { ...this.props };
    this.props.searchTopic(this.state);
  }

  changeTopic(e) {
    this.setState({ topic: e.target.value });
  }
  changeStart(e) {
    this.setState({ start: e.target.value });
  }
  changeEnd(e) {
    this.setState({ end: e.target.value });
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
              onClick={this.sendArticle}
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
