import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar';

function Homepage ()  {
  
  return (
    <>
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand  className='ms-4' href='#home'>My Homepage</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse >
        <Nav className='ml-auto ' >
          <Link to='Home'className='ms-4 ' > Home</Link>
          <Link to='Accounts' className='ms-4'>Accounts</Link> 
          <Link to='About' className='ms-4'>About</Link>  

        </Nav>
        <Nav className='mr-auto'>
          <Link to='Userdetails' className='ms-4'>Userdetails</Link>
          
        </Nav>
        
      </Navbar.Collapse>
      
    </Navbar>
  
    </>
  );
};

export default Homepage;



