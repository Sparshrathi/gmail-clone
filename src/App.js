import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SendMail from './Components/SendMail';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="app_body">
            <Sidebar/>
            
            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>
              <Route path="/">
                <EmailList/>
              </Route>
            </Switch>
          </div>
        
          <SendMail/>

      </div>
    </Router>
  );
}

export default App;
