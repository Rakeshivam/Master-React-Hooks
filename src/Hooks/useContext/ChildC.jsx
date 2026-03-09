import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const ChildC = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <>
      <p>
        My name is {user.name}, city is {user.city}
      </p>
      <p>Theme is {theme}</p>
    </>
  );
};

export default ChildC;
