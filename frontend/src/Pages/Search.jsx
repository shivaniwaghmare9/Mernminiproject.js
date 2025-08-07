
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const Search=()=>{
  const[rno,setRno]=useState("");

  const handleSubmit=()=>{
    
  }
    return(
        <>
        <h3 className="h33">Search Data!!!</h3>
    <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
     </Form.Group>
     <Button variant="primary" type="button" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
        </>
    )
}
export default Search;