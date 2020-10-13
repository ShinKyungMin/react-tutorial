import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(1);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <form>
      <label>이름 </label>
      <input value={name} onChange={onChangeName} />
      <label>성별 </label>
      <select>
        {" "}
        value={gender} onChange={onChangeGender}
        <option value={1}> 남자 </option>
        <option value={2}> 여자 </option>
      </select>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default SignUp;
