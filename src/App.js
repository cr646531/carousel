import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import User from './User';

class App extends Component{

  render(){
    
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default connect(null)(App);