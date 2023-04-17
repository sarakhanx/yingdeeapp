import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container text-center">
    <Link to='/shelt/deliveryIndex'><button className="btn btn-danger mt-5 me-1">Yingdee App</button></Link>
    <Link to='https://production-calculate.netlify.app/' target={"_blank"}><button className="btn btn-warning mt-5 me-1"> โปรแกรมคำนวนการผลิตแบ็กดร็อป</button></Link>
    <Link to='https://balloon-summer.web.app' target={"_blank"}><button className="btn btn-secondary mt-5 me-1"> เว็บเมนู ส่งให้ลูกค้า</button></Link>
    <Link to='https://manager.line.biz/' target={"_blank"}><button className="btn btn-success mt-5 me-1">LINE BUSINES ไลน์แอด </button></Link>
    <Link to='https://business.facebook.com/latest/inbox/' target={"_blank"}><button className="btn btn-info mt-5 me-1">FACEBOOK Meta </button></Link>
    <Link to='https://bdms-balloons.web.app' target={"_blank"}><button className="btn btn-info mt-5 me-1">เว็บไซต์ของรพ.กรุงเทพ พัทยา </button></Link>
    </div>
    </>
  )
}
export default App;