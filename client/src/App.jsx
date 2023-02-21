import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container text-center">
    
    <Link to='/shelt/deliveryIndex'><button className="btn btn-danger mt-5"> Delivery</button></Link>
    <Link to='https://production-calculate.netlify.app/' target={"_blank"}><button className="btn btn-warning mt-5"> โปรแกรมคำนวนการผลิตแบ็กดร็อป</button></Link>
    
    
    
    </div>
    </>
  )
}
export default App;