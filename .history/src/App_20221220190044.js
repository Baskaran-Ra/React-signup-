import logo from './logo.svg';
import './App.css';
import Signup from './signup'
import { Container } from 'react-bootstrap';
import { AuthProvide } from './AuthContext';

function App() {
  return (
    <AuthProvide
    <Container className="d-flex alifn-item-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{minWidth:"400px"}}> 
      <Signup />
      </div>

    </Container>
   

  )
  
    
 
}

export default App;
