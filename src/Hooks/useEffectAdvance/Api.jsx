import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log("Error", err));
  }, []);

  console.log("Data : ", data);

  return <>{data ? <div>{data[10].title}</div> : <p>No Data Found</p>}</>;
};

export default Api;
