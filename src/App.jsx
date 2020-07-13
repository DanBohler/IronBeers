import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';

import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component  {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/beers' component={Beers}/>
          <Route path='/beer/:id' render={(props) => (<SingleBeer {...props}/>)} />
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
