import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : { id: "", note: "" };
  });

  useEffect(() => {
    const username = sessionStorage.getItem("user");
    if (username) {
      setUser(username);
    } else {
      console.log("An error occurred");
    }
  }, []);

  const setItems = (e) => {
    e.preventDefault();
    setTask({ id: task.id, note: task.note });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
    console.log("Saved to localStorage");
  }, [task]);

  return (
    <>
      {JSON.stringify({ user })}
      <form onSubmit={setItems}>
        <div className="container">
          <input
            type="text"
            placeholder=""
            value={task.id}
            onChange={(e) => setTask({ ...task, id: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder=""
            value={task.note}
            onChange={(e) => setTask({ ...task, note: e.target.value })}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Dashboard;
