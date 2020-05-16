import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state={
      count: 0,
    }
  }

  plus() {
    this.setState({count: this.state.count +1})
  }

  minus() {
    this.setState({count: this.state.count -1})
  }

  render() {
    return (
      <div>
        <h1>HelloWorld</h1>
        <p>{this.state.count}</p>
        <div>
          <button onClick={() => this.plus()}>+</button>
          <button onClick={() => this.minus()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
