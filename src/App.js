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

import { useState } from 'react';
import { createContext } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import Services from './components/Home/Services/Services';
import Bookings from './components/Dashboard/Bookings/Bookings';
import AddReviews from './components/Dashboard/AddReviews/AddReviews';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import BookOrder from './components/Dashboard/BookOrder/BookOrder';
import Login from './components/Login/Login';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';


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
        <Route path ="/addservice">
          <AddService/>
        </Route>
        <Route path ="/addreview">
          <AddReviews/>
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path='/services/:_id'>
          <BookOrder/>
        </PrivateRoute>
        <PrivateRoute path="/bookorder">
          <BookOrder></BookOrder>
        </PrivateRoute>
        <PrivateRoute path='/bookings'>
          <Bookings></Bookings>
        </PrivateRoute>
        <Route path='/addadmin'>
          <AddAdmin></AddAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
