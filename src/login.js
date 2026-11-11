import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

  function Login(){
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

        <Form >
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  />
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