import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "../../Action/appActions";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "",
      note: ""
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
    this.props.addList(this.state);
    this.setState({
      list: "",
      note: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmit} style={{marginBottom: "20px"}}>
          <div class="field">
            <label class="label">Add a TODO-LIST & Note</label>
            <div class="control">
              <input style={{width: "50%"}}
                class="input"
                type="text"
                name="list"
                placeholder="Add Todo"
                onChange={this.handlChange}
                value={this.state.list}
              />
            </div>
            <div class="control">
              <input
                style={{ width: "50%", padding: "40px" }}
                class="input"
                type="text"
                name="note"
                placeholder="Create Note"
                onChange={this.handlChange}
                value={this.state.note}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="button is-link"
              >
                Add
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
