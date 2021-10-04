import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../Action/NotesActions";

class NotesAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
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
    this.props.addNote(this.state);
    this.setState({
      note: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmit} style={{ marginBottom: "20px" }}>
          <div class="field">
            <label class="label">Create Note</label>
            <div class="control">
              <input
                style={{ width: "50%", height: "20%" }}
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
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addNote: addNote,
};

export default connect(null, mapDispatchToProps)(NotesAdd);
