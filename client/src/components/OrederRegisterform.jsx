import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios"
import Swal from "sweetalert2"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'




function OrderRegister() {
    const [state,setState] = useState({
        cusid:"",
        custelephone:""
    })
    const {cusid,launchdate} = state;
    const [destination,setDestination] = useState('')

    //! logtype เป็นพารามิเตอร์ที่เอาไว้เก็บค่าที่เปลี่ยนไปของ onChange เพื่อนำไปบันทึกลงdatabase
    const billRegister = logType=>e=>{
            setState({...state,[logType]:e.target.value});
    }
    const submitQuill = (e)=>{
        setDestination(e)
    }
    const submited = (e)=>{
        e.preventDefault();
        axios.post(
            `${process.env.REACT_APP_API}/create`,{cusid,destination,launchdate})
            .then(response => {
                Swal.fire(
                    'Register Success !!',
                    'นายเองก็เป็นได้นะ คนลงคิวน่ะ',
                    'success'
                  );
                  setState({...state,cusid:'',launchdate:''});
                  setDestination('')
                  
            }).catch(err=>{
                  Swal.fire('beep beep',err.response.data.error,'error')
                  console.log(err.response.data.error)
            });
        
    }
    return (
        <>
        <Navbar/>
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
                >วันเริ่มคิวงาน | DATE</label>
            </div>
            <ReactQuill value={destination}
                        onChange = {submitQuill}
                        theme = "snow"
                        className="form-floating p-1"/>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="launchDate"
                defaultValue={launchdate}
                onChange={billRegister("launchdate")}/>
                <label htmlFor="launchDate">ผู้จัดทำ | Updater</label>
            </div>
            <button type="submit" className="btn btn-success">Success</button>
            </form>
            </div>
        </>
    )
}

export default OrderRegister;
