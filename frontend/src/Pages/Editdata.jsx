
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ToastContainer,toast} from "react-toastify"
import { useParams } from "react-router-dom";
const Editdata=()=>{
    const {id}=useParams();
    return(
        <>
        <h3>Edit data {id}</h3>
        <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name="name" onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Rollno</Form.Label>
        <Form.Control type="text"  name="rollno" onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"  name="subject" onChange={handleInput}/>
     </Form.Group>

     <Form.Group className="mb-3" >
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text"  name="fees" onChange={handleInput}/>
     </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default Editdata;