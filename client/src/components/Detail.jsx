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
        <div className="container mt-2 text-center"> 
         {/* ข้างในบันจุ ชื่อลูกค้า เบอร์โทรลูกค้า วันที่จัดส่ง สถานที่จัดส่งพร้อมโน๊ตLocation.maps จัดตะกร้าหรือยัง โน๊ตรายละเอียดบิลได้เล็กน้อย */}

         
        <div className="card text-bg-primary mb-3 container" style={{maxWidth: '18rem'}}>
            <h1 className="card-header fs-3 text-warning">วันที่{shelt.cusid}</h1>
            <div className="card-body">
                {shelt.destination ? <p className='card-text customer-destination'>รายละเอียดงาน <br/> {renderHTML(shelt.destination)} </p>: null}
            </div>
        </div>
        </div>
        </>
    )}
    export default Detail;
