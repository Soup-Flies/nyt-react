import React, { Component } from "react";

class DisplaySection extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className={this.props.title}>{this.props.title}</span>
              <hr />
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //fetch saved articles
  }
}

export default DisplaySection;
