import './App.css';
import Navbar from './components/Navbar';
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <div className=' container text-center'>
    <h1 className='text-center text-primary' >INDEX HOLA CHIGA</h1>
   <Link to='/create'> <button className='btn btn-danger' > " CLICK HERE MATOFAKO YOU ARE CHIGAAAA "</button></Link>
    </div>
    </>
  );
}

export default App;
