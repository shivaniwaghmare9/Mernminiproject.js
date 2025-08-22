
// import { useState,useEffect } from "react";
// import BackendUrl from "../Utils/BackendURL";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
// import {ToastContainer, toast } from "react-toastify";
// import {useNavigate} from "react-router-dom"
// const Update=()=>{
//     const [mydata,setMydata]=useState([]);
//     const navigate=useNavigate();
//     const loadData=async()=>{
//         let api=`${BackendUrl}students/update`;
//         const response=await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data)
//     }
//     useEffect(()=>{
//         loadData();
//     },[])

//     const deletedata=async(id)=>{
//       let api=`${BackendUrl}students/delete/${id}`;
//       const response=await axios.delete(api);
//       console.log(response.data)
//       toast.error("data successfully deleted")
//       loadData();
//     }

//     const editdata=(id)=>{
//         navigate(`/edit/${id}`)
//     }
//     let sno=0;
//     const ans=mydata.map((key)=>{
//         sno++;
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <td>{key.name}</td>
//                 <td>{key.rollno}</td>
//                 <td>{key.subject}</td>
//                 <td>{key.fees}</td>
//                 <td>
//                   <span onClick={()=>{editdata(key._id)}} className="span1">edit</span>
//                 </td>
//                 <td>
//                   <span onClick={()=>{deletedata(key._id)}} className="span2">delete</span>
//                   </td>
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>
//           <h3 className='h33'>Data update page!!</h3>
//          <Table striped bordered hover id="tbl">
//       <thead>
//         <tr>
//           <th>Sno</th>
//           <th>Name</th>
//           <th>Rollno</th>
//           <th>Subject</th>
//           <th>Fees</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//       </Table>
//       <ToastContainer/>
//         </>
//     )
// }
// export default Update;

import { useState,useEffect } from "react";
import BackendUrl from "../Utils/BackendURL";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {ToastContainer, toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api=`${BackendUrl}students/update`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])

    const deletedata=async(id)=>{
      let api=`${BackendUrl}students/delete/${id}`;
      const response=await axios.delete(api);
      console.log(response.data)
      toast.error("data successfully deleted")
      loadData();
    }

    const editdata=(id)=>{
        navigate(`/edit/${id}`)
    }
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
                  <span onClick={()=>{editdata(key._id)}} className="span1">edit</span>
                </td>
                <td>
                  <span onClick={()=>{deletedata(key._id)}} className="span2">delete</span>
                  </td>
            </tr>
            </>
        )
    })
    return(
        <>
          <h3 className='h33'>Data update page!!</h3>
         <Table striped bordered hover id="tbl">
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
      <ToastContainer/>
        </>
    )
}
export default Update;