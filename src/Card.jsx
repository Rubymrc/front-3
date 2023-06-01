import React from "react";

function Card({ info }) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>{info.input1}</p>
      <div className="colorBox" style={{ backgroundColor: info.input2 }}>
        {info.input2}
      </div>
    </div>
  );
}

export default Card;
