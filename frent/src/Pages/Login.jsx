import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigator=useNavigate()
const[state,setState]=useState(0)
const[email,setemailadress]=useState("")
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
    <div className='l2'>


       <div>
        <h2>LOGIN</h2>
       </div>
       <div className='l1'>
       <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemailadress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
    </Form>
       </div>
       <div>
       <Button variant="warning" onClick={handleSubmit} >LOGIN</Button>{' '}
       </div>
    </div>
  )
}

export default Login
