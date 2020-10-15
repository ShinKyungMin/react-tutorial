import React, { useState } from "react";
const AttendanceBook = () => {
  const [name1, setName] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "이순신" },
    { id: 2, name: "세종대왕" },
    { id: 3, name: "계백" },
    { id: 4, name: "궁예" },
    { id: 5, name: "척준경" },
    { id: 6, name: "손오공" },
    { id: 7, name: "삼장" },
    { id: 8, name: "저팔계" },
    { id: 9, name: "사오정" },
  ]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <ul>
        {students.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
        <li>{name1}</li>
      </ul>
      <br></br>
      <label> 이름을 입력하세요 : </label>
      <input value={name1} onChange={onChangeName} value={name1} />
    </form>
  );
};
export default AttendanceBook;
