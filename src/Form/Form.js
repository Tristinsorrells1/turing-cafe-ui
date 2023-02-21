import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      guests: "",
      number: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createReservation = (event) => {
    event.preventDefault();
    let reservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: Number(this.state.guests),
    };
    this.props.addReservation(reservation);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="number"
          placeholder="Number of guests"
          name="guests"
          value={this.state.guests}
          onChange={(event) => this.handleChange(event)}
        />
        <button
          className="submit"
          onClick={(event) => this.createReservation(event)}
        >
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
