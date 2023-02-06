import { useState,useEffect } from "react";
import Navbar from "./Navbar";



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
    return (
        <>
        <Navbar/>
        {/* //TODO: {JSON.stringify(state)} /// เอาไว้logค่าออกมาดู */}

        <div className="container text-center mt-5">
          <h1 className='text-warning p-2 mb-1'>ลงทะเบียนข้อมูลคิวลูกค้า</h1>
            <form>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="customerName"
                placeholder="ใส่ชื่อลูกค้า"
                defaultValue={cusid}
                onChange={billRegister("cusid")}/>
                <label htmlFor="customerName"
                >ชื่อลูกค้า / customer name</label>
            </div>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="customerTelephone"
                placeholder="เบอร​์โทรติดต่อผู้รับ"
                defaultValue={custelephone}
                onChange={billRegister("custelephone")}/>
                <label htmlFor="customerTelephone">เบอร์โทรลูกค้า / customer's contact</label>
            </div>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="destination"
                placeholder="สถานที่จัดส่ง"
                defaultValue={destination}
                onChange={billRegister("destination")}/>
                <label htmlFor="destination">สถานที่จัดส่งส่งหรือรับสิยนค้า / destination</label>
            </div>
            <div className="form-floating p-1">
                <input type="text"
                className="form-control"
                id="launchDate"
                placeholder="1/1/2023"
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
