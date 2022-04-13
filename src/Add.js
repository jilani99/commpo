import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal, Form,Row, Col, FloatingLabel} from 'react-bootstrap';



const Add = ({show,handleClose, newRate, setRate, addMovie}) => {
  const onStarClick=(nextValue, prevValue, name) => {
    setNewMovie({...newMovie,rating:nextValue})
  };
  const [newMovie,setNewMovie]=useState({
    title:"",
    rating:"1",
    description:"",
    img:""
  })
  const handleChange = (e) =>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})

  }
  return <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="title" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image url</Form.Label>
      <Form.Control type="password" placeholder="Image url" onChange={handleChange} name="img"/>
    </Form.Group>
  </Row>
  
  <>
    <FloatingLabel controlId="floatingTextarea2" > Description
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      onChange={handleChange}
      name="description"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>
  {/* <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Duration</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose type">
        <option>Thriller</option>
        <option>Romance</option>
        <option>Social</option>
        <option>Science Fiction</option>
      </Form.Select>
    </Form.Group>
    </Row> */}

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {addMovie(newMovie) ; handleClose()} }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      
  
  </div>;
};

export default Add;
