import React, { Component } from "react";

class UserInput extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey lighten-1">
            <div className="input-field">
              <input id={this.props.id} type="text" className="validate" />
              <label className={"active " + this.props.title}>
                {this.props.title}
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
