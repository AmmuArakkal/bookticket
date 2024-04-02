import React from "react";
import Seat from "../Seat/Seat";

import styles from "./Row.module.css";

function Row(props) {
  const seatsArray = new Array(props.row.numberofSeats).fill('available');
//   console.log(props.row.numberofSeats)
  return (
    <li className={styles.Row}>
      <h4>{props.row.name}</h4>
      <div className={styles.Rowwrapper}>
        <ul className={styles.RowSeats}>
          {seatsArray.map((seat,index) => {
            return <Seat key={index} seat={seat} index={index} rowName={props.row.name} />;
          })}
        </ul>
      </div>
    </li>
  );
}

export default Row;
