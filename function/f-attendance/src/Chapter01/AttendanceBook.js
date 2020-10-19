import React, { useState, useRef } from "react";
import StudentsList from "./StudentsList";
import CreateStudents from "./CreateStudents";

function AttendanceBook() {
  const [inputs, setInputs] = useState({
    studentname: "",
  });
  const { studentname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onRemove = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const [students, setStudents] = useState([
    { id: 1, studentname: "짱구" },
    { id: 2, studentname: "철수" },
    { id: 3, studentname: "유리" },
    { id: 4, studentname: "맹구" },
    { id: 5, studentname: "수지" },
    { id: 6, studentname: "짱아" },
    { id: 7, studentname: "흰둥" },
    { id: 8, studentname: "떡잎" },
    { id: 9, studentname: "마을" },
  ]);

  const nextId = useRef(10);
  const onCreate = () => {
    const student = {
      id: nextId.current,
      studentname,
    };
    setStudents(students.concat(student));

    setInputs({
      studentname: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <StudentsList students={students} onRemove={onRemove} />
      <CreateStudents
        studentname={studentname}
        onChange={onChange}
        onCreate={onCreate}
      />
    </>
  );
}
export default AttendanceBook;
