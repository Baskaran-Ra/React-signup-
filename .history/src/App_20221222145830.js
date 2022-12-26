import React  from 'react';

import Signup from './signup'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashbord from './Dashbord';

function App() {
  return (
  
    <Container className="d-flex alifn-item-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{minWidth:"400px"}}> 
      
    
      <Router>
          <AuthProvider>
          <Signup />
              <Route exact path="/" component={Dashbord} />
             
              <Route path="/signup" component={Signup} />
             
             
           
          </AuthProvider>
        </Router>
      </div>
      </Container>

    
   

  )
  
    
 
}

export default App;
