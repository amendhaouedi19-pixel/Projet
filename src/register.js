
import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {

  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, familyName, email, password })
    });
  };

  return (

    <div className="d-flex justify-content-center align-items-center"
         style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>

      <Card className="p-4 shadow" style={{ width: '400px' }}>

        <div className="text-center mb-4">
          <img src="/logo1.jpg" style={{ width: '120px' }} />
        </div>

        <Form onSubmit={handleRegister}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Family Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Register
          </Button>

          <div className="text-center mt-3">
            Already have an account? <Link to="/">Sign In</Link>
          </div>

        </Form>

      </Card>
    </div>
  );
}

export default Register;
