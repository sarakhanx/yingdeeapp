import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios"
import Swal from "sweetalert2"
import renderHTML from 'react-render-html'




function OrderRegister() {
    const [state,setState] = useState({
        cusid:"",
        custelephone:"",
        destination:"",
        launchdate:""
    })
    const {cusid,custelephone,destination,launchdate} = state;

    //! logtype เป็นพารามิเตอร์ที่เอาไว้เก็บค่าที่เปลี่ยนไปของ onChange เพื่อนำไปบันทึกลงdatabase
    const billRegister = logType=>e=>{
            setState({...state,[logType]:e.target.value});
    }
    const submited = (e)=>{
        e.preventDefault();
        axios.post(
            `${process.env.REACT_APP_API}/create`,{cusid,custelephone,destination,launchdate})
            .then(response => {
                Swal.fire(
                    'Register Success !!',
                    'นายเองก็เป็นได้นะ คนลงคิวน่ะ',
                    'success'
                  )
                  setState({...state,cusid:"",custelephone:"",destination:"",launchdate:""});
                  
            }).catch(err=>{
                  Swal.fire('beep beep',err.response.data.error,'error')
                  console.log(err.response.data.error)
            });
        
    }
    return (
        <>
        <Navbar/>
        {/* //! {JSON.stringify(state)} /// เอาไว้logค่าออกมาดู */}

        <div className="container text-center mt-5">
          <h1 className='text-warning p-2 mb-1'>ลงทะเบียนข้อมูลคิวลูกค้า</h1>
            <form onSubmit={submited}>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="customerName"
                defaultValue={cusid}
                onChange={billRegister("cusid")}/>
                <label htmlFor="customerName"
                >ชื่อลูกค้า / customer name</label>
            </div>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="customerTelephone"
                defaultValue={custelephone}
                onChange={billRegister("custelephone")}/>
                <label htmlFor="customerTelephone">เบอร์โทรลูกค้า / customer's contact</label>
            </div>
            <div className="form-floating p-1">
                <textarea type="text"
                className="form-control"
                id="destination"
                defaultValue={destination}
                onChange={billRegister("destination")}></textarea>
                <label htmlFor="destination">สถานที่จัดส่งส่งหรือรับสิยนค้า / destination</label>
            </div>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="launchDate"
                defaultValue={launchdate}
                onChange={billRegister("launchdate")}/>
                <label htmlFor="launchDate">วันที่จัดส่งหรือติดตั้ง / Date</label>
            </div>
            <button type="submit" className="btn btn-success">Success</button>
            </form>
            </div>
        </>
    )
}

export default OrderRegister;
