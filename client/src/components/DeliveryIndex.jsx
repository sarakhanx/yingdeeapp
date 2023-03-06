import '../App.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect} from 'react';
import Swal from 'sweetalert2';
import renderHTML from 'react-render-html'


function DeliveryIndex() {
const [searchTask,setSearchTask] = useState('')
const [shelts,setShelts] = useState([]);
const [filter , setFilter] = useState([])


const fetchShelt =()=>{
  axios.get(`${process.env.REACT_APP_API}/shelt`)
  .then(response=>{
    setShelts(response.data);
    setFilter(response.data);
  })
  .catch(err=>{
    Swal.fire('beep beep',err.response.data.error,'error')
    console.log(err.response.data.error);
  })
} 
useEffect(()=>{
  fetchShelt()
},[])
useEffect(()=>{
  if(searchTask===''){
    setFilter(shelts);
  }else{
    const filtered = shelts.filter(shelt => shelt.cusid.toLowerCase().includes(searchTask.toLowerCase()));
      setFilter(filtered);
  }
},[searchTask,shelts]);


// const [selectedItem, setSelectedItem] = useState(null);

// const onDrop = (e, index) => {
//   e.preventDefault();
//   setShelts(prevShelts => {
//     const newShelts = [...prevShelts];
//     const temp = newShelts[selectedItem];
//     newShelts[selectedItem] = newShelts[index];
//     newShelts[index] = temp;
//     return newShelts;
//   });
//   setSelectedItem(null);
// };

// const onDragStart = (e, index) => {
//   setSelectedItem(index);
// };

// const onDragOver = e => {
//   e.preventDefault();
// };

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
    <div div className=''>
    <Navbar/>
    <div div className='container align-items-center'>
    <div className="container text-center mt-2">
      <form action="">
      <input type="text"
      className='from-control'
      placeholder='ค้นหา'
      value={searchTask}
      onChange={(e)=>{setSearchTask(e.target.value)}}
      />
      </form>
    </div>
    <div className=' container text-center'>
    <h1 className='text-center text-primary' > แอดมินสุดยอดนักลงคิว </h1>
   <Link to='/create'> <button className='btn btn-danger' > " Click ที่นี่ เพื่อทำการบันทึกคิววันใหม่ "</button></Link>
    </div>
   
    <div className='row board-column'>
      {filter.map((shelt,index) => (
        <div key={index}
          className='task-item border-bottom text-start col-md-4'>
            <Link to={`/shelt/${shelt.slug}`} state={{shelts}}>
            <h3 className='text-info p-2'>{shelt.cusid}</h3>
          </Link>
          <h3 className=''>รายละเอียดตารางงานประจำวันที่</h3>
          {renderHTML(shelt.destination.substring(0,30))}
          <br />
          <Link className='btn btn-success m-1' to={`/shelt/taskupdate/${shelt.slug}`}>เพิ่มคิวหรือแก้ไข</Link>
          <button className='btn btn-danger m-1 mb-2 mt-2' onClick={()=>confirmDelete(shelt.slug)}>ลบคิว</button>
        </div>
        
        
      ))}
    
              </div>
        
    </div>
    </div>
  );
}

export default DeliveryIndex;
