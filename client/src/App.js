import React from 'react';
import Particles from 'react-particles-js';
//import logo from './logo.svg';
import './App.css';
import SignIn from './signin.js';
import SignUp from './signup.js';
import Donorlanding from './donorlanding.js';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ngolanding from "./ngolanding";
import Volunteerlanding from './volunteerlanding';
import PrivateRoute from './PrivateRoute';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1200 // Denser the smaller the number.
      }
    },
    color: { // The color for every node, not the connecting lines.
      value: "#000000" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
    },
    line_linked: {
      enable: true,
      distance: 200, // The radius before a line is added, the lower the number the more lines.
      color: "#000000",
      opacity: 0.2,
      width: 2
    },

  }
}
function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <PrivateRoute component={Donorlanding} path="/donorlanding" exact />
            <PrivateRoute component={Ngolanding} path="/ngolanding" exact />
            <PrivateRoute component={Volunteerlanding} path="/volunteerlanding" exact />

          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
