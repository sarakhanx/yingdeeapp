import React from "react";
import { useEffect, useState } from "react";
// todo: ทำเสตทขึ้นมาเพื่อเก็บtask ลง local แล้วต้องเอา state มาดึงlocal ออกมาโชวด้วย
const Dashboard = () => {
  const [user, setUser] = useState("");
  const [task , setTask] = useState({
    id:"",
    note:""
  })
  const {id,note} = task;
  useEffect(() => {
    if (user) {
    //   console.log("an error occured");
    } else {
      const username = sessionStorage.getItem("user");
      console.log(username);
      setUser(username);
    }
  }, [user]);

const setItems=(e)=>{
    e.preventDefault();
    setTask(task)
}
  useEffect(()=>{
localStorage.setItem('tasks',JSON.stringify(task))
console.log('err')
  })

  return (<>{JSON.stringify({ user })}
    <form action="" onSubmit={()=>setItems}>
        <div className="container">
            <input type="text"
            placeholder=""
            value={id}
            onChange={(e)=>setTask(e.target.value)}
            /> <br />
            <input type="text"
            placeholder=""
            value={note}
            onChange={(e)=>setTask(e.target.value)}
            />
        </div>
        <button
        className="btn btn-success"
        
        > submit</button>
    </form>
  </>)
};

export default Dashboard;
