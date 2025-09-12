import React, { useEffect, useRef, useState } from "react";
import { Todolist3 } from "./todolist3";

export const Todoadd3 = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);

  const uRef = useRef("null");

  useEffect(() => {
    uRef.current.focus();
  });

  function Adding() {
    if (data.trim() !== "") {
      setValue([...value, data]);
      setData("");
    }
  }

  function Listing(index) {
    const newData = [...value];
    newData.splice(index, 1);
    setValue(newData);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={data}
          placeholder="Text Anything"
          ref={uRef}
          onChange={(event) => setData(event.target.value)}
        />
        <button onClick={Adding}>ADD</button>
      </div>
      <Todolist3 datas={value} dlt={Listing} />
    </>
  );
};
