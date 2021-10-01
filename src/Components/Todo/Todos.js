import React, {useState} from "react";
import { connect } from "react-redux";
import { deleteList } from "../../Action/appActions";
import TodoEdit from './TodoEdit';
import Modal from 'react-bootstrap/Modal';

const Todos = ({ Todo, deleteList, editList }) => {
    const [show, setShow]= useState(false);
    const handleClose =()=> setShow(false);
    const handleShow= () => setShow(true);
    const deletehandle=(e)=>{
        deleteList(Todo.id)
    };
  return (
    <>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{Todo.list}</p>
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
          <Modal.Title>Edit Todo-list</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <TodoEdit
            todo={Todo}
            editList={editList}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      </div>

      </>
  );
};

const mapDispatchToProps = {
  deleteList: deleteList,
};
export default connect(null, mapDispatchToProps)(Todos);
