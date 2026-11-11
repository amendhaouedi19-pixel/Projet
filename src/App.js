import logo from './logo.svg';
import './App.css';
import Login from './login';
import { Main } from './main';
import Register from './register';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  
   
   
  );
}

export default App;

