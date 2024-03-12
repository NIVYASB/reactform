import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 

function Add() {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex'>
      <h5 className='me-1 mt-2'>Upload New Video</h5>
      <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning'/> Upload Videos</Modal.Title>
        </Modal.Header>
        <p>Please fill the following details</p>
        <form action="">

        <Form.Group className='mb-3'><Form.Control type="text" placeholder="Enter the  Video ID"></Form.Control></Form.Group>

        <Form.Group className='mb-3'><Form.Control type="text" placeholder="Enter the  Video Caption"></Form.Control></Form.Group>

        <Form.Group className='mb-3'><Form.Control type="text" placeholder="Enter the Youtube Video Link"></Form.Control></Form.Group>


          <Form.Group className='mb-3'><Form.Control type="text" placeholder="Enter the Youtube Video Link"></Form.Control></Form.Group>

        </form>
        
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add