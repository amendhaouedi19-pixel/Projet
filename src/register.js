import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




function Register() {
  
  return (
    
    <div className="d-flex justify-content-center align-items-center"
         style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>

      <Card className="p-4 shadow" style={{ width: '400px' }}>

        <div className="text-center mb-4">
          <img
            src="/logo1.jpg"
            style={{ width: '120px' }}
          />
         
        </div>

        <Form >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  
               />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Family Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Create password"  
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Repeat password" 
               />
          </Form.Group>
            <Link to="/Main">
               <Button type="submit" variant="primary" className="w-100">
            Register 
          </Button>
            </Link>
         

          <div className="text-center mt-3">
            Already have an account? <Link to="/">Sign In</Link>
          </div>
        </Form>

      </Card>
    </div>
  );
}

export default Register;