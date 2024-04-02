import React from "react";
import styles from "./BookingSummary.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function BookingSummary(props) {
  const selectedSeats = useSelector((state) => state.screen.selectedSeats);
  const show = useSelector((state) => state.screen.selectedShow);
  const totalPrice = useSelector((state) => state.screen.totalPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const bookingPayload = {
      email: email,
      phone: phone,
      selectedSeats: selectedSeats,
      show: show,
    };
    axios
      .post("http://localhost:3000/bookings", bookingPayload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {console.log(err)});
  };
  return (
    <main className={styles.Main}>
      <div className={styles.Summary}>
        <h2>Booking Summary</h2>
        <ul className={styles.Seats}>
          {selectedSeats.map((seat, index) => {
            return (
              <li key={index} className={styles.SelectedSeats}>
                <h3>
                  {seat.rowName}-{seat.seatNumber}
                </h3>
              </li>
            );
          })}
        </ul>
        <form className={styles.ConfirmationForm} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={(e) => {}} />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
          <button type="submit" className={styles.ConfirmButton}>
            confirm booking - Rs.{totalPrice}
          </button>
        </form>
      </div>
    </main>
  );
}

export default BookingSummary;
