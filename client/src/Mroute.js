import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import OrderRegister from './components/OrederRegisterform'
function Mroute() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/create' element={<OrderRegister/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Mroute;