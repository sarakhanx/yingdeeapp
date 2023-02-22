import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Detail from './components/Detail'
import OrderRegister from './components/OrederRegisterform'
import DeliveryIndex from './components/DeliveryIndex'
import EditTask from './components/EditTask'
function Mroute() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<App/>}/>
            <Route path='/create' exact element={<OrderRegister/>}/>
            <Route path="/shelt/:slug" exact element={<Detail/>} />
            <Route path="/shelt/deliveryIndex" exact element={<DeliveryIndex/>} />
            <Route path="/shelt/taskupdate/:slug" exact element={<EditTask/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Mroute;