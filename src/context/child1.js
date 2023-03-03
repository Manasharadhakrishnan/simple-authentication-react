// function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }

  import Child2 from "./Child2"
  
   function Child1() {
    return (
      <div>
        <h1>Child1</h1>
        <Child2 />
      </div>
    );
  }
  export default Child1