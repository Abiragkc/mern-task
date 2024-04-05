import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from"axios"


const Regsiter = () => {
    const Navigate=useNavigate()

    const[state,setstate]=useState(0)
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const[phone,setphone]=useState("")
    const[adress,setadress]=useState("")


    
    const handleSubmit=()=>{
      console.log({name,email, phone,adress,password});
      axios.post("http://localhost:9000/regsiter",{
        name:name,
        email:email,
        password:password,
        
       
      }).then((res)=>{
        console.log(res);
        
      }).catch((erro)=>{
        console.log(erro);
      })


     

    }

  return (
    <div className='r2'>
        <div>
            <h1>REGISTRATION</h1>
        </div>
        <div className='r1' >
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="name" onChange={(e)=>setname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
    </Form>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="phone number" onChange={(e)=>setphone(e.target.value)} />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="adress" placeholder="Enter adress" onChange={(e)=>setadress(e.target.value)} />
      </Form.Group>
    </Form>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>
    </div>
    <div>
    <Button variant="danger" onClick={handleSubmit}>SING UP</Button>{' '}
    </div>
    </div>
  )
}

export default Regsiter
