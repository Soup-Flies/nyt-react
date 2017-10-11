import React, { Component } from "react";
import DisplaySection from "../container/DisplaySection";
import PropTypes from 'prop-types';

class PulledArticles extends Component {

  render() {
    const articles = this.props.returnedArticles;
    const styles = {
      color: "#AAAAB5",
      textDecoration: "underline"
    }
    return (
      <DisplaySection title={"Search Results"}>
        <ul>
          {articles.map(i => {
            return (
              <li key={i._id}>
                <div className="row">
                  <div className="col s12">
                    <div className="card blue-grey lighten-1">
                      <div className="card-content white-text">
                        <span className="card-title">{i.headline.main}</span>
                        <div>{i["pub_date"].slice(0, 10)}</div>
                        <a style={styles} href={i["web_url"]} > Click for more</a>
                        <div>
                          <a className="waves-effect waves-light btn">Save</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </DisplaySection >
    );
  }
}
PulledArticles.propTypes = {
  returnedArticles: PropTypes.array.isRequired
}

PulledArticles.defaultProps = {
  returnedArticles: []
}
export default PulledArticles;
