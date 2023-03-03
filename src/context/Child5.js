import { useState, createContext, useContext } from "react";
function Child5() {
    const [user, setUser] = useState("Jesse Hall");
    const UserContext = createContext();
  
    return (
      <>
        <h1>Child 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  export default Child5;