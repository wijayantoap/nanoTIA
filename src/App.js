import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/post/:slug" component={Post} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
