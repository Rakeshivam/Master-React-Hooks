import axios from "axios";
import React, { useState } from "react";

const AxiosPost = () => {
  const data = { fname: "", lname: "" };

  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((res) => {
        console.log(res);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((res) => {
        console.log(res);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <form action="">
        <label htmlFor="">First Name : </label>
        <input
          onChange={handleData}
          type="text"
          name="fname"
          value={inputData.fname}
          placeholder="enter first name"
        />
        <br />

        <label htmlFor="">Last Name : </label>
        <input
          onChange={handleData}
          type="text"
          name="lname"
          value={inputData.lname}
          placeholder="enter last name"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
};

export default AxiosPost;
