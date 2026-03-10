import React from "react";
import { data, data1 } from "./Parent";

const ChildC = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(age) => {
                return (
                  <p>
                    My name is {name} and age is {age}.
                  </p>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
