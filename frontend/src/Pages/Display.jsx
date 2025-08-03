
import { useState,useEffect } from "react";
import BackendUrl from "../Utils/BackendURL";
import axios from "axios";
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
    return(
        <>
         
        </>
    )
}
export default Display;