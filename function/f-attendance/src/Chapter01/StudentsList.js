import React from "react";

function Student({ student, onRemove }) {
  return (
    <li>
      {student.studentname}
      <button onClick={() => onRemove(student.id)}>삭제</button>
    </li>
  );
}

function StudentsList({ students, onRemove }) {
  return (
    <ul>
      {students.map((student, id) => (
        <Student student={student} key={id} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default StudentsList;
