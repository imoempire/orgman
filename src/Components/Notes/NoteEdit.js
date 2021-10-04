import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../../Action/NotesActions";
import '../Todo/Todo.css';

class NotesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note.note || "",
      id: props.note.id || "",
    }
  }

  handlChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlSubmit = (e) => {
    e.preventDefault();
    this.props.editNote(this.state);
    this.setState({
      note: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <div class="field">
            <div class="control">
              <input class="input"
                name="note"
                type="text"
                onChange={this.handlChange}
                value={this.state.note}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  editNote: editNote,
};

export default connect(null, mapDispatchToProps)(NotesEdit);
