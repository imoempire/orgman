import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember, getAllMembers } from "../../Action/memberActions";
import { NavLink } from 'react-router-dom';

class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Phone: "",
      email: "",
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
    this.props.addMember(this.state);
    this.setState({
      name: "",
      Phone: "",
      email: "",
    });
  };
  componentDidMount() {
    this.props.getAllMember();
  }
  render() {
    return (
      <div>
        <button className="button is-success">
          <NavLink to="/member"> See All Members</NavLink>
        </button>

        <form onSubmit={this.handlSubmit} style={{ marginBottom: "20px" }}>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                style={{ width: "50%", height: "20%" }}
                class="input"
                type="text"
                name="name"
                placeholder="Create Note"
                onChange={this.handlChange}
                value={this.state.name}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <input
                style={{ width: "50%", height: "20%" }}
                class="input"
                type="text"
                name="Phone"
                placeholder="Create Note"
                onChange={this.handlChange}
                value={this.state.Phone}
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                style={{ width: "50%", height: "20%" }}
                class="input"
                type="text"
                name="email"
                placeholder="Create Note"
                onChange={this.handlChange}
                value={this.state.email}
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
  addMember: addMember,
  getAllMember: getAllMembers,
};

export default connect(null, mapDispatchToProps)(AddMember);
