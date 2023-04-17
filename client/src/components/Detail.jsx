import axios from "axios"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import renderHTML from 'react-render-html'


function Detail (){
    const [shelt,setShelts] = useState([])
    const {slug} = useParams();
    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API }/shelt/${slug}`)
        .then(response =>{
            setShelts(response.data)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line
    },[])
    
      

    return (
        <>
        <Navbar/>
<div className="container border border-light bg-light mt-2">
    <h1 className="text-secondary">Report งานประจำวันที่ : {shelt.cusid}</h1>
    <div className="border border-secondary border-top"></div>
    <p className="text-center">รายละเอียดเวลางาน</p>
    {shelt.destination ?<div className="text-start">{renderHTML(shelt.destination)}</div>: null}
    <div className="text-muted text-center mt-3">{shelt.launchdate} <br/><div className="container">{shelt.updatedAt}</div> </div>
    
    {/* {JSON.stringify({shelt})} */}
</div>
        </>
    )}
    export default Detail;
