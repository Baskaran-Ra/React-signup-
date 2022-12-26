import React  from 'react';

import Signup from './signup'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  
    <Container className="d-flex alifn-item-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{minWidth:"400px"}}> 
      
      <Signup />
      <Router>
          <AuthProvider>
         
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
             
           
          </AuthProvider>
        </Router>
      </div>

    
    </AuthProvider>

  )
  
    
 
}

export default App;
