import React, { useEffect, useState } from "react";

import axios from "axios";

const AxiosGet = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUserData(res.data);
    });
  }, []);
  return (
    <>
      {userData.map((data) => {
        return <div>{data.name}</div>;
      })}
    </>
  );
};

export default AxiosGet;
