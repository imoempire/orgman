import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "../../Action/appActions";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "",
    };
  }

  handlChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlSubmit = (e) => {
    e.preventDefault();

    this.setState({
      list: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <div class="field">
            <label class="label">Label</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Add Todo"
                onChange={this.handlChange}
                value={this.state.list}
              />
            </div>
            <p class="help">This is a help text</p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="button is-link"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button onClick={this.handleGoBack}
                className="button is-link is-light">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps={
    addList: addList
}

export default connect(null, mapDispatchToProps)(TodoAdd);
