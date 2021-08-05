import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './screens/homeScreen';
import ResultScreen from './screens/resultScreen';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import IntrestScreen from './screens/interestScreen';
import Header from './components/header'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/results" component={ResultScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/intrests" component={IntrestScreen} />
      </Switch>
    </Router>
  )
}

export default App;
