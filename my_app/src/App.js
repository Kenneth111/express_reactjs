import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {users: []};
  }
  fetchUsers(){
    return fetch('api/users', {accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.fetchUsers.bind(this)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.users.map((user, index) => {
          return (<h1 key={index}>{user.name}</h1>)
        })}
      </div>
    );
  }
}

export default App;
