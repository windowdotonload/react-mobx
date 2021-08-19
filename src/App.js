/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { action } from 'mobx'
import { observer, inject } from 'mobx-react';



class App extends React.Component {

  render() {
    const { counter } = this.props
    const change = action(() => {
      counter.count++
    })
    return (
      <div className="App">
        <h1 onClick={change}>{counter.count}</h1>
      </div>
    )
  }
}
console.log(inject('counter'))
export default inject('counter')(observer(App));
