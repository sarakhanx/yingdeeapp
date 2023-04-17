import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <div className="bg-warning text-center p-3">
            <p className="text-muted">พบเห็นปัญหา กรุณาติดต่อ  Developer ผ่านทาง</p>
            <button className="btn btn-danger"><Link to="/reportissues">CLICK</Link></button>
        </div>
        </>
    )
}