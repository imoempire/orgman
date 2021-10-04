import React, {useState} from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../Action/NotesActions";
import TodoEdit from './NoteEdit';
import Modal from 'react-bootstrap/Modal';

const Notes = ({ Note, deleteNote, editNote }) => {
    const [show, setShow]= useState(false);
    const handleClose =()=> setShow(false);
    const handleShow= () => setShow(true);
    const deletehandle=(e)=>{
        deleteNote(Note.id)
    };
  return (
    <>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{Note.note}</p>
        </header>
        <footer class="card-footer">
          <button class="card-footer-item button is-danger" onClick={deletehandle}>Delete</button>
          <button class="card-footer-item button is-warning" onClick={handleShow}>Edit</button>
        </footer>
      </div>
      

      {/* Modal */}
      <div>
      <Modal show={show} onHide={handleClose} style={{margin: "300px 390px", padding: "-10px"}}>
        <Modal.Header>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <TodoEdit
            todo={Note}
            editList={editNote}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      </div>

      </>
  );
};

const mapDispatchToProps = {
  deleteNote: deleteNote,
};
export default connect(null, mapDispatchToProps)(Notes);
