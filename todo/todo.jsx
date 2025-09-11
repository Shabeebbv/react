import React, { useState } from "react";

function Add() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState("");

  function addtask() {
    const newtask = [...task, { title: value }];
    setTask(newtask);
    setValue("");
  }

  function delettask(index) {
    const newtask = [...task];
    newtask.splice(index, 1);
    setTask(newtask);
  }

  return (
    <div className="todo" style={{ textAlign: "center" }}>
      <div>
        <h1>Todo-List</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {"   "}
        <button onClick={addtask}>ADD</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {task.map((tsk, index) => (
          <div key={index}>
            {tsk.title}
            {"  "}
            <button
              onClick={() => {
                delettask(index);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Add;
