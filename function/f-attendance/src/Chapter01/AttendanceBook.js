import React, { useState } from "react";

const AttendanceBook = () => {
  const [students] = useState([
    { id: 1, name: "Mike" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Susan" },
    { id: 4, name: "Steve" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Leo" },
    { id: 7, name: "John" },
    { id: 8, name: "Sam" },
    { id: 9, name: "Kate" },
  ]);

  return (
    <ul>
      {students.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
