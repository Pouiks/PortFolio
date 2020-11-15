// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// == Import
import LeftNav from 'src/components/LeftNav';
import Home from 'src/components/Home';
import About from 'src/components/About';
import './styles.scss';

// == Composant
const App = () => {
  AOS.init();


  return (
    <div className="app">
      <LeftNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};
// == Export
export default App;
