import React  from 'react';

import Signup from './signup'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashbord from './Dashbord';
import Login from 

function App() {
  return (
  
    <Container className="d-flex alifn-item-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{minWidth:"400px"}}> 
      
    
      <Router>
          <AuthProvider>
         <Switch>
              <Route exact path="/Dashbord" component={Dashbord} />
             
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
             
              </Switch>
           
          </AuthProvider>
        </Router>
      </div>
      </Container>

    
   

  )
  
    
 
}

export default App;
