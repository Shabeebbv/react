import React, { useEffect, useRef, useState } from "react";
import { Todolist } from "./todolist";

export const Addtask = () => {
  const [input, setInput] = useState(" ");
  const [data, setData] = useState([]);

  function Adding() {
    if (input.trim()!==""){
    setData([...data, input]);
    setInput("");
    }
  }

  const urf = useRef("null");

  useEffect(() => {
    urf.current.focus();
  });
  function handleDelete(index){
    const newData=[...data]
    newData.splice(index,1)
    setData(newData)
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Text Anything"
          ref={urf}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={Adding}>ADD</button>
      </div>
      <Todolist tasks={data} dlt={handleDelete}/>
    </>
  );
};
