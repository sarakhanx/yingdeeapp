import axios from "axios"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


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
        <div className="container mt-2 text-center"> 
        {JSON.stringify(shelt._id)}
         {/* ข้างในบันจุ ชื่อลูกค้า เบอร์โทรลูกค้า วันที่จัดส่ง สถานที่จัดส่งพร้อมโน๊ตLocation.maps จัดตะกร้าหรือยัง โน๊ตรายละเอียดบิลได้เล็กน้อย */}

         
        <div className="card text-bg-primary mb-3 container" style={{maxWidth: '18rem'}}>
            <h1 className="card-header fs-3 text-warning">K.{shelt.cusid}</h1>
            <div className="card-body">
                <p className='card-text customer-telephone'>ติดต่อ {shelt.custelephone} </p>
                <p className='card-text customer-launchdate'>{shelt.launchdate} </p>
                <p className='card-text customer-destination'>สถานที่จัดส่ง {shelt.destination} </p>
                <p className="card-text note-location">Locaion</p>
                <p className='card-text customer-baskets'>จัดตะกร้า = {shelt.prepare}</p>
            </div>
        </div>
        </div>
        </>
    )}
    export default Detail;
