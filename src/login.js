import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
  function Login(){
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleLogin = (e) => {
      e.preventDefault();

      fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

    }
  return (
    <div className="d-flex justify-content-center align-items-center"
         style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>

      <Card className="p-4 shadow" style={{ width: '400px' }}>

        <div className="text-center mb-4">
          <img
            src="/logo1.jpg"
            alt=""
            style={{ width: '120px' }}
          />
          
        </div>

        <Form  onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
            <Link to="/Main">
             <Button variant="primary" type="submit" className="w-100">
            Sign In 
          </Button>
            </Link>
         

          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Create one</Link>
          </div>
        </Form>

      </Card>
    </div>
  );



}
  
export default Login;