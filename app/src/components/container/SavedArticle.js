import React, { Component } from 'react';
import Header from './Header';
import DisplaySection from './DisplaySection';

class SavedArticle extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <Header />
        <DisplaySection title={"Saved Articles"}>
        </DisplaySection>
      </div>
    );
  }
}

export default SavedArticle;