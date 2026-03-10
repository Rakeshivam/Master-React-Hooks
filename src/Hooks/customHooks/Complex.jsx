import React from "react";
import useForm from "./useForm";

const Complex = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const {handleChange, resetForm, formData} = useForm(initialState);

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData);
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter name "
        value={formData.name}
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
      />
      <button type="submit">Submit</button>
      <button onClick={resetForm}>Reset</button>
    </form>
  );
};

export default Complex;
