import React, { Component } from 'react';
import Header from './Header';
import UserInput from './UserInput';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <UserInput />
      </div>
              
    )
  }
}
export default App;