import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Detail from './components/Detail'
import OrderRegister from './components/OrederRegisterform'
import DeliveryIndex from './components/DeliveryIndex'
import EditTask from './components/EditTask'
import LoginComponent from './components/LoginComponent'
import AdminRoute from './AdminRoute'
import ReportIssues from './components/ReportIssues'
import Dashboard from './user-components/Dashboard'
export default function Mroute() {
    return (
        
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<App/>}/>
            <Route element={<AdminRoute/>}>
                <Route element={<OrderRegister/>} path='/create'exact/>
            </Route>
            <Route path="/shelt/:slug" exact element={<Detail/>} />
            <Route path="/shelt/deliveryIndex" exact element={<DeliveryIndex/>} />
            <Route path="/shelt/taskupdate/:slug" exact element={<EditTask/>} />
            <Route path="/login" exact element={<LoginComponent/>} />
            <Route path='/reportissues' exact element={<ReportIssues/>}/>
            <Route path='/dashboard' exact element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    )
}