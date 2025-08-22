
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {ToastContainer,toast} from "react-toastify"
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import BackendUrl from '../Utils/BackendURL';
// import axios from 'axios';
// const Editdata=()=>{
//     const {id}=useParams();
//     const [mydata,setMydata]=useState({});
//     const loadData=async()=>{
//         let api=`${BackendUrl}students/myedit/?id=${id}`;
//         const response=await axios.get(api,mydata);
//         console.log(response.data);
//         setMydata(response.data);
//     }
//     useEffect(()=>{
//         loadData();
//     },[])

//     const handleInput=async(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setMydata(Values=>({...Values,[name]:value}))
//         console.log(mydata)
//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         let api=`${BackendUrl}students/editsave`;
//         const response=await axios.post(api,mydata);
//         console.log(response.data)
//         toast.success("data successfully updated")
//     }
//     return(
//         <>
//         <h3 className='h33'>Edit data </h3>
//         <Form id="form">
//       <Form.Group className="mb-3" >
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text"  name="name" value={mydata.name} onChange={handleInput}/>
//      </Form.Group>

//       <Form.Group className="mb-3" >
//         <Form.Label>Rollno</Form.Label>
//         <Form.Control type="text"  name="rollno" value={mydata.rollno} onChange={handleInput}/>
//      </Form.Group>

//       <Form.Group className="mb-3" >
//         <Form.Label>Subject</Form.Label>
//         <Form.Control type="text"  name="subject" value={mydata.subject} onChange={handleInput}/>
//      </Form.Group>

//      <Form.Group className="mb-3" >
//         <Form.Label>Fees</Form.Label>
//         <Form.Control type="text"  name="fees" value={mydata.fees} onChange={handleInput}/>
//      </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//     <ToastContainer/>
//         </>
//     )
// }
// export default Editdata;


import { useState,useEffect } from "react";
import BackendUrl from "../Utils/BackendURL";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`${BackendUrl}students/display`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.subject}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>

        <h3 className='h33'>Displayed data!!</h3>
         <Table striped bordered hover id="tbl">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Subject</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Display;