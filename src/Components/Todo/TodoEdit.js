import React, { Component } from "react";
import { connect } from "react-redux";
import { editList } from "../../Action/appActions";
import './Todo.css';

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.todo.list || "",
      id: props.todo.id || "",
    }
  }

  handlChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlSubmit = (e) => {
    e.preventDefault();
    this.props.editList(this.state);
    this.setState({
      list: "",
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
                name="list"
                type="text"
                onChange={this.handlChange}
                value={this.state.list}
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
  editList: editList,
};

export default connect(null, mapDispatchToProps)(TodoEdit);
