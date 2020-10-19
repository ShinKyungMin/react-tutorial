import React, { useState } from "react";
const AttendanceBook = () => {
  const [name1, setName] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "짱구" },
    { id: 2, name: "철수" },
    { id: 3, name: "유리" },
    { id: 4, name: "맹구" },
    { id: 5, name: "수지" },
    { id: 6, name: "짱아" },
    { id: 7, name: "흰둥" },
    { id: 8, name: "떡잎" },
    { id: 9, name: "마을" },
  ]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const add = (e) => {
    // e.preventDefault();
    const id = 10;
    setStudents(students.concat({ id: id, name: name1 }));
  };

  return (
    <form>
      <ul>
        {students.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <label> 이름을 입력하세요 : </label>
      <input type="text" onChange={onChangeName}></input>
      <button onClick={add} type="button">
        추가
      </button>
    </form>
  );
};
export default AttendanceBook;
