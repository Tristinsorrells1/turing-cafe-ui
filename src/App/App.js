import React, { Component } from 'react';
import './App.css';
import fetchReservations from '../apiCalls'
import Reservations from '../Reservations/Reservations.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchReservations()
    .then((data) => this.setState( {reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
