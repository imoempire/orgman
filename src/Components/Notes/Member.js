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

    <table class="table" style={{ marginLeft: '20px'}}>
  <thead>
    <h1 style={{fontSize: '20px', fontWeight: '900'}}>Member</h1>
    <tr>
      <th><h1 style={{fontWeight: '900'}} title="Position">Name</h1></th>
      <th><h1 style={{fontWeight: '900'}} title="Played">Phone</h1></th>
      <th><h1 style={{fontWeight: '900'}} title="Won">Email</h1></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>{member.name}</th>
      <td>{member.Phone}</td>
      <td>{member.email}</td>
    </tr>   
  </tbody>
  <footer className="card-footer">
        <button onClick={handleShow} className="card-footer-item button is-warning">
          Edit
        </button>
        <button onClick={deletehandle} className="card-footer-item button is-danger">
          Delete
        </button>
    </footer>

</table>

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
