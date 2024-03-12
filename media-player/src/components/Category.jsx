import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';
import VideoCard from '../components/VideoCard'




function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
      <button className='btn   btn-warning w-100'>
        Add New Category
      </button>
    </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='text-warning me-3' />Add New Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form className='border border-secondary rounded p-3'> 
        <p>Catogary Name</p> 
      
      <Form.Group className="mb-3"><Form.Control type="text" placeholder="Enter the  Category Name"></Form.Control></Form.Group>
      
    </Form>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    <div className='border border-secondary w-100 rounded mt-5'>
      <div className='d-flex justify-content-center align-items-center'>
        <p>category name</p>
        <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Category