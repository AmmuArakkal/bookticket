import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Seat.module.css";
import {
  selectSeat,
  deselectSeat,
  setBookedSeats,
} from "../../store/screenSlice";

function Seat(props) {
  const [status, setStatus] = useState("available");
  const bookedSeats = useSelector((state) => state.screen.bookedSeats);
  // console.log(bookedSeats)
  const dispatch = useDispatch();
  // const selectedSeats = useSelector((state) => state.screen.selectedSeats);

  const seatNumber = props.index + 1;
  useEffect(() => {
    const result = bookedSeats.filter(
      (seat) => seat.rowName === props.rowName && seat.seatNumber === seatNumber
    );
    // console.log(result);

    if(result.length!==0){
      setStatus('booked')
    }
  }, [bookedSeats]);

  function handleSelect() {
    console.log(props.seat);
    console.log(props.rowName);

    if (status === "available") {
      setStatus("selected");
      dispatch(selectSeat({ rowName: props.rowName, seatNumber: seatNumber }));
    } else if (status === "selected") {
      setStatus("available");
      dispatch(
        deselectSeat({ rowName: props.rowName, seatNumber: seatNumber })
      );
    }
  }

  return (
    <li
      className={
        styles.Seat +
        " " +
        (status === "selected" ? styles.Selected : "") +
        " "+(status === "booked" ? styles.Booked : "")
      }
      onClick={() => {
        handleSelect();
      }}
    >
      <span>{seatNumber}</span>
    </li>
  );
}

export default Seat;
