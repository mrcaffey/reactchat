import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title/>
      </MessageList/>
      <SendMessageForm/>
      </div>
    );
  }
}

export default App;
