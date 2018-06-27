import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

render() {

    return (
<div className='app-wrapper'>
  <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
</div>
    );
  }
}

export default App;
