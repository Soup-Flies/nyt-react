import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    const styles = {
      base: {
        color: 'white'
      },
      active: {
        color: "#AAAAB5"
      }
    }
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <span className="card-title">New York Times Articles</span>
              <p>New York Times Article Scrubber</p>
              <p>Search for and annotate articles of interest!</p>
              <hr />
              <div>
                <NavLink
                  className="col s6"
                  to="/home"
                  style={styles.base}
                  activeStyle={styles.active}>
                  Home
                </NavLink>
                <NavLink
                  className="col s6"
                  to="/savedarticles"
                  style={styles.base}
                  activeStyle={styles.active}>
                  Saved
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
