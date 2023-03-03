
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import About from './About';
import Userdetails from './Userdetails';
import Home from './Home';
import Login from "./login";
import Accounts from './Accounts';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       <Navbar/> 
        <Routes>
        {/* <Route index element ={<Navbar />}></Route> */}
          <Route path='Login' element={<Login/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Accounts' element={<Accounts/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Userdetails' element={<Userdetails/>}></Route>
      
        </Routes>
    
      </BrowserRouter>
    {/* <Maincontext/> */}
  
    </div>
  );
}

export default App;
