
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ToastContainer,toast} from "react-toastify"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import BackendUrl from '../Utils/BackendURL';
import axios from 'axios';
const Editdata=()=>{
    const {id}=useParams();
    const [mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`${BackendUrl}/students/?id=${id}`;
        const response=await axios.get(api,mydata);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const handleInput=async(e)=>{
        let api=`${BackendUrl}/students/editdata`;
        const response=await axios.post(api);
        console.log(response)
        toast.success("data successfully updated")
    }
    return(
        <>
        <h3>Edit data {id}</h3>
        <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name="name" value={mydata.name} onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Rollno</Form.Label>
        <Form.Control type="text"  name="rollno" value={mydata.rollno} onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"  name="subject" value={mydata.subject} onChange={handleInput}/>
     </Form.Group>

     <Form.Group className="mb-3" >
        <Form.Label>Fees</Form.Label>
        <Form.Control type="text"  name="fees" value={mydata.fees} onChange={handleInput}/>
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