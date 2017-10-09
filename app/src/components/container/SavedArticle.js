import React, { Component } from 'react';
import Header from './Header';
import DisplaySection from './DisplaySection';
import PropTypes from 'prop-types';

class SavedArticle extends Component {
  constructor() {
    super()
    this.displaySavedArticles = this.displaySavedArticles.bind(this);
  }

  displaySavedArticles = () => {
    const styles = {
      color: "#AAAAB5",
      textDecoration: "underline"
    }
    if (this.props.articles[0] !== "You have no saved articles") {
      return (
        this.props.articles.map(i => {
          return (
            <li>
              <div className="row">
                <div className="col s12">
                  <div className="card blue-grey lighten-1">
                    <div className="card-content white-text">
                      <span className="card-title">{i.headline.main}</span>
                      <div>{i["pub_date"].slice(0, 10)}</div>
                      <a style={styles} href={i["web_url"]} >Click for more</a>
                      <div>
                        <a className="waves-effect waves-light btn">Save</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })
      )
    } else {
      return <h3>{this.props.articles[0]}</h3>
    }
  }
  render() {


    return (
      <div className="App">
        <Header />
        <DisplaySection title={"Saved Articles"}>
          <ul>
            {this.displaySavedArticles()}
          </ul>
        </DisplaySection>
      </div>
    );
  }
}

SavedArticle.propTypes = {
  articles: PropTypes.object.isRequired
};
SavedArticle.defaultProps = {
  articles: ["You have no saved articles"]
};

export default SavedArticle;

