
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackendUrl from '../Utils/BackendURL';
// import axios from "axios"
// import Table from 'react-bootstrap/Table';
// const Search=()=>{
//   const[rno,setRno]=useState("");
//   const[mydata,setMydata]=useState([]);


//   const handleSubmit=async()=>{
//       let api=`${BackendUrl}students/search`;
//       const response=await axios.post(api,{rollno:rno});
//       console.log(response.data);
//       setMydata(response.data)
//   }

//   let sno=0;
//     return(
//         <>
//         <h3 className="h33">Search Data!!!</h3>
//     <Form id="form">
//       <Form.Group className="mb-3" >
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text"  value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
//      </Form.Group>
//      <Button variant="primary" type="button" onClick={handleSubmit}>
//         Search
//       </Button>
//     </Form>
//     <Table striped bordered hover id="tbl">
//       <thead>
//         <tr>
//           <th>Sno</th>
//           <th>Name</th>
//           <th>Rollno</th>
//           <th>Subject</th>
//           <th>Fees</th>
//         </tr>
//       </thead>
      
//       <tbody>
        
//         {mydata.length>=1 && mydata.map((key)=>{
//           sno++;
//           return(
//             <>
//              <tr>
//               <td>{sno}</td>
//               <td>{key.name}</td>
//               <td>{key.rollno}</td>
//               <td>{key.subject}</td>
//               <td>{key.fees}</td>
//              </tr>
//             </>
//           )
//         })}
//       </tbody>
//       </Table>
//         </>
//     )
// }
// export default Search;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackendUrl from '../Utils/BackendURL';
import axios from "axios"
import Table from 'react-bootstrap/Table';
const Search=()=>{
  const[rno,setRno]=useState("");
  const[mydata,setMydata]=useState([]);


  const handleSubmit=async()=>{
      let api=`${BackendUrl}students/search`;
      const response=await axios.post(api,{rollno:rno});
      console.log(response.data);
      setMydata(response.data)
  }

  let sno=0;
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
        
        {mydata.length>=1 && mydata.map((key)=>{
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
        })}
      </tbody>
      </Table>
        </>
    )
}
export default Search;