import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

const propTypes = {
  loadSum: PropTypes.func.isRequired
}

function loadSum([a,b]){
  // return Promise.resolve(a + b) //async no timeout

  //async 5 sec timeout
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 5000)
  })
}

class App extends Component {
  state = {
    loading:false,
    value:null,
  }

  componentDidMount(){
    this.setState({loading:true})

    loadSum([3, 5]).then(value => {
      this.setState({
        loading: false,
        value
      })
    })
  }

  render() {
    const {loading, value} = this.state

    if(loading){
      return <h2>Loading...</h2>
    }
    return (
      <div className="App">
        <h1>Hello dud, the value is {value} </h1>

      </div>
    );
  }
}

export default App;
