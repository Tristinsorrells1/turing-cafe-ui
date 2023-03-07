import React, { useState, useEffect} from 'react';
import './App.css';
import fetchReservations from '../apiCalls'
import Reservations from '../Reservations/Reservations.js'
import Form from '../Form/Form.js'

const App = () => {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
    .then((data) => setReservations( data))
  }, [])


  let addReservation = (reservation) => {
       fetch("http://localhost:3001/api/v1/reservations", {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: { "Content-Type": "application/json" }
      })
      .then((response) => {
        if (response.ok) {
          response.json();
          console.log("Posted!", response)
          fetchReservations()
          .then((data) => setReservations( data))
        }
        else if (!response.ok) {
          console.log("Response Not Ok", response)
        }
      })
      .catch((error) => {
        console.log(`An error occurred: ${error.message}`);
      });
  }
    return (
    
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          <Form addReservation={addReservation}/>
          <Reservations reservations={reservations} />
        </div>
      </div>
      
    )
  }


export default App;
