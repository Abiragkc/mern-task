import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import home from"../assets/home wallpaper.jpg"
import axios from 'axios';


const Home = () => {

  const[state,setState]=useState(0)
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  
   const token=localStorage.getItem("jwt")
  
  const handleSubmit=()=>{
    console.log(email,password);
  
    axios.post("http://localhost:9000/login",{
      email,
      password
    }).then((res)=>{
  
      localStorage.setItem("jwt",res.data)
  
      navigator("/")
      console.log(res);
    }).catch((erro)=>{
      console.log(erro);
    })
  }
  



  return (
    <div>
      <div>

        {token?
           <button onClick={()=>localStorage.removeItem("jwt")}>LOGOUT</button>
           :
           <button>LOGIN</button>
        }
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="REGSITER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Button variant="primary" onClick={handleSubmit}>login</Button>{' '}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Button variant="success">regsiter</Button>{' '}
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
       <img src={home} className='h2' alt="" />
      </div>
      <div className='h1'>
      <p>
        hsdhegbdjbwjdgcjejskadgjwkjsvsjwhaskagdas <br />jkjxnksbvdmsndmxvz,dncsvKbxj
      </p>
      </div>
    </div>
  )
}

export default Home
