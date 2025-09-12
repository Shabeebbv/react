import React from "react";

export const Todolist3 = ({ datas = [], dlt }) => {
  return (
    <div>
      {datas.map((list, index) => (
        <p key={index}>
          {" "}
          {list}
          <button onClick={() => dlt(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
};
