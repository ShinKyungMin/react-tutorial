import React from "react";

function CreateStudents({ studentname, onChange, onCreate }) {
  return (
    <ul>
      <input
        name="studentname"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={studentname}
      />
      <button onClick={onCreate}> 추가 </button>
    </ul>
  );
}

export default CreateStudents;
