import React, { Component } from "react";
import { connect } from "react-redux";
import { editMember } from "../../Action/memberActions";
import '../Todo/Todo.css';

class EditMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.member.name||'',
      Phone:  props.member.Phone||'',
      email:  props.member.email||'',
      id: props.member.id || "",
    }
  }

  handlChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handlSubmit = (e) => {
    e.preventDefault();
    this.props.editMember(this.state);
    this.setState({
      name: '',
      Phone: '',
      email: '',
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
                name="name"
                type="text"
                onChange={this.handlChange}
                value={this.state.name}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input"
                name="Phone"
                type="number"
                onChange={this.handlChange}
                value={this.state.Phone}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input"
                name="email"
                type="email"
                onChange={this.handlChange}
                value={this.state.email}
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
  editMember: editMember,
};

export default connect(null, mapDispatchToProps)(EditMember);
