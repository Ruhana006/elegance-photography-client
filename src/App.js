import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path ="/home">
          <Home/>
        </Route>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path ="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
