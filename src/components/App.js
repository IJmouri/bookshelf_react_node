import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import BookList from '../pages/BookList';
import Navigation from './navigation/Navigation';
import '../App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Navigation />
        <Switch>
          <Route path='/' exact component={BookList}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </div>
  
    </BrowserRouter>
    );
}

export default App;
