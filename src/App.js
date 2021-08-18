/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { observer } from 'mobx-react';


@observer
class App extends React.Component {
  render() {
    const { store } = this.props
    console.log(store)
    return (
      <div className="App">
        <h1 onClick={store.add}>{store.count}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
