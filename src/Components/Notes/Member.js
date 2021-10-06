import React, { useState } from "react";
import { connect } from "react-redux";
import EditMember from "./EditMember";
import Modal from "react-bootstrap/Modal";
import { deleteMember } from "../../Action/memberActions";

const Member = ({ member, deleteMember, editMember }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deletehandle = (e) => {
    deleteMember(member.id);
  };
  return (
    <>

<div className="card">
      <header className="card-header">
        <p className="card-header-title has-text-danger">
           Member Info
        </p>
      </header>
      <div className="card-content">
        <div className="content" style={{height: '110px'}}>
          <table className="table is-striped is-hoverable">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{member.name}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{member.Phone}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{member.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className="card-footer">
        <button onClick={handleShow} className="card-footer-item">
          Edit
        </button>
        <button onClick={deletehandle} className="card-footer-item">
          Delete
        </button>
      </footer>
    </div>

      {/* Modal */}
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          style={{ margin: "260px 390px", padding: "-10px" }}
        >
          <Modal.Header>
            <Modal.Title style={{fontSize: '30px'}}><h1>Edit Member Info</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditMember
              member={member}
              editMember={editMember}
              closeModal={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteMember: deleteMember,
};
export default connect(null, mapDispatchToProps)(Member);
