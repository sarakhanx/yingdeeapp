
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const EditTask = () =>{
const [state,setState] = useState({
    cusid:"",
    custelephone:"",
    destination:"",
    launchdate:""
})
const {cusid,launchdate} = state
const [destination,setDestination] = useState('')
const submitContent = (event)=>{
    setDestination(event)
}
const {slug} = useParams();
useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_API }/shelt/${slug}`)
    .then(response =>{
        const {cusid,custelephone,destination,launchdate,slug} = response.data 
        setState({...state,cusid,custelephone,destination,launchdate,slug})
        setDestination(destination)
    })
    
    .catch(err=>alert(err))
    // eslint-disable-next-line
},[])
    const showUpdateFrom = (event)=>(
        <form onSubmit={submitFrom}>
                <div className="form-group">
                    <label>ชื่อลูกค้า</label>
                    <input type="text" className="form-control"
                        value={cusid}
                        onChange={inputValue("cusid")}/>
                </div>
                <div className="form-group">
                    <label>สถานที่จัดส่ง</label>
                    <ReactQuill value={destination}
                    onChange = {submitContent}
                    theme = "snow"
                    className="pb-5 mb-5"
                    />
                </div>
                <div className="form-group">
                    <label>วันที่จัดส่งหรือติดตั้ง</label>
                    <input type="text" className="form-control" 
                    value={launchdate} 
                    onChange={inputValue("launchdate")}/>
                </div><br/>
                <input type="submit" value="update" className="btn btn-success"/>
                <Link className="btn btn-danger" to="/"> กลับหน้าแรก </Link>
            </form>
    )
const inputValue = name=>event=>{
    setState({...state,[name]:event.target.value});
}
const submitFrom =(event)=>{
    event.preventDefault();
    console.table({cusid,destination,launchdate})
    console.log("API URL =",process.env.REACT_APP_API)
    axios.put(`${process.env.REACT_APP_API}/shelt/${slug}`,{cusid,destination,launchdate},
    ).then(response=>{
        Swal.fire('You have done','EDITED!!','success')
        const {cusid,destination,launchdate,slug} = response.data
        setState({...state,cusid,destination,launchdate,slug})
          setState({...state,cusid:"",launchdate:""})
          setDestination(destination)
        
    }).catch(err=>{
        Swal.fire('beep beep',err.response.data.error,'error')
    })
}

        return (
            <>
            <Navbar/>
        <div className="container p-5">
            <h1 className="text-primary"> EDIT </h1>
            {showUpdateFrom()}
 
        </div>
        </>
    );
}
export default EditTask;