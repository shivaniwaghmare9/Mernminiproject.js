
import { useState,useEffect } from "react";
import BackendUrl from "../Utils/BackendURL";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api=`${BackendUrl}students/update`;
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
                <td>
                  <span onClick={()=>{editdata(key._id)}}>edit</span>
                </td>
                <td>delete</td>
            </tr>
            </>
        )
    })
    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Subject</th>
          <th>Fees</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Update;