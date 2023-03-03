
import { useState, createContext } from "react";
import Child1 from './child1';
const UserContext = createContext();

function Maincontext() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Child1 />
    </UserContext.Provider>

    </>
  );
}
export default Maincontext;