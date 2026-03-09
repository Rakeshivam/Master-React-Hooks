import ChildA from "./ChildA";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

// create, provide, useContext

// const data = createContext();

const Parent = () => {
  // const name = "Rakesh";
  // const city = "Noida"

  const user = {
    name: "Rakesh",
    city: "noida",
  };

  const theme = "dark";
  return (
    <>
      <UserContext value={user}>
        <ThemeContext value={theme}>
          <ChildA />
        </ThemeContext>
      </UserContext>
    </>
  );
};

export default Parent;
// export { data };
