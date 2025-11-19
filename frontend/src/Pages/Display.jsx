
// import { useState,useEffect } from "react";
// import BackendUrl from "../Utils/BackendURL";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';

// const Display=()=>{
//     const [mydata,setMydata]=useState([]);
//     const loadData=async()=>{
//         let api=`${BackendUrl}students/display`;
//         const response=await axios.get(api);
//         console.log(response.data);
//         setMydata(response.data)
//     }
//     useEffect(()=>{
//         loadData();
//     },[])
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
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>

//         <h3 className='h33'>Displayed data!!</h3>
//          <Table striped bordered hover id="tbl">
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
//         {ans}
//       </tbody>
//       </Table>
//         </>
//     )
// }
// export default Display;

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