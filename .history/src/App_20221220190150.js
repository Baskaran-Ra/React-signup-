
import logo from './logo.svg';
import './App.css';
import Signup from './Signup'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <Container className="d-flex alifn-item-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{minWidth:"400px"}}> 
      <Signup />
      </div>

    </Container>
    </AuthProvider>

  )
  
    
 
}

export default App;
