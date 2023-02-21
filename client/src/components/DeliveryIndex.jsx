import '../App.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect,useParams } from 'react';
import Swal from 'sweetalert2';


function DeliveryIndex() {
const [shelts,setShelts] = useState([]);
const fetchShelt =()=>{
  axios.get(`${process.env.REACT_APP_API}/shelt`)
  .then(response=>{
    setShelts(response.data)
  })
  .catch(err=>{
    Swal.fire('beep beep',err.response.data.error,'error')
    console.log(err.response.data.error);
  })
} 
useEffect(()=>{
  fetchShelt()
},[])


const [selectedItem, setSelectedItem] = useState(null);

const onDrop = (e, index) => {
  e.preventDefault();
  setShelts(prevShelts => {
    const newShelts = [...prevShelts];
    const temp = newShelts[selectedItem];
    newShelts[selectedItem] = newShelts[index];
    newShelts[index] = temp;
    return newShelts;
  });
  setSelectedItem(null);
};

const onDragStart = (e, index) => {
  setSelectedItem(index);
};

const onDragOver = e => {
  e.preventDefault();
};

const confirmDelete = (slug)=>{
  Swal.fire({
    title: "Confirm Delete",
    icon:"warning",
    showCancelButton:true
  }).then((result)=>{
    if(result.isConfirmed){
      deleteTask(slug)
      
    }
  })
const deleteTask=(slug)=>{
  axios.delete(`${process.env.REACT_APP_API}/shelt/${slug}`)
  .then(response=>{
    Swal.fire("DELETED!!",response.data.message,"success")
    fetchShelt()
  })
  .catch(err=>console.log(err))
}
}




  return (
    <>
    <Navbar/>
    <div className=' container text-center'>
    <h1 className='text-center text-primary' >INDEX HOLA CHIGA</h1>
   <Link to='/create'> <button className='btn btn-danger' > " CLICK HERE MATOFAKO YOU ARE CHIGAAAA "</button></Link>
    </div>
   
    <div className='col board-column'>
          <ul id='task-row' className='text-center text-secondary p-0 row'>
            <li id='task-column col'>
              <div className='custom-scroll container'>
              <ul className='task-board col'>
                <span>งานมาใหม่</span>
      {shelts.map((shelt, index) => (
        <li
          className='task-item border-bottom'
          key={index}
          onDrop={e => onDrop(e, index)}
          onDragOver={onDragOver}
          onDragStart={e => onDragStart(e, index)}
          draggable
        >
          <>
          
          <Link to={`/shelt/${shelt.slug}`} state={{shelts}}>
            <h4 className='text-warning p-2'>{shelt.cusid}</h4>
          </Link>
          </>
          เบอร์โทรลูกค้า {shelt.custelephone} , สถานที่จัดส่ง {shelt.destination} วันที่จัดส่งหรือติดตั้ง :{shelt.launchdate}
          <br />
          <button className='btn btn-danger mb-2 mt-2' onClick={()=>confirmDelete(shelt.slug)}>delete</button>
        </li>
        
        
      ))}
    </ul>
    
              </div>
            </li>
          </ul>
        </div>
        
    </>
  );
}

export default DeliveryIndex;
