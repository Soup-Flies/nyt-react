import React, { Component } from "react";

// const styles = {
//   base: {
//     border: "2px solid black"
//   }
// };

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <span className="card-title">New York Times Articles</span>
              <p>New York Times Article Scrubber</p>
              <p>Search for and annotate articles of interest!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
