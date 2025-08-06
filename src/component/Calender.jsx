import React from 'react'
import notebook from '../assets/notebook.png';

function Calender() {
  const today = new Date();
  const day = today.getDate();
  const month = `${today.getMonth() + 1}`;
  const year = today.getFullYear();

  return (
    <div style={{ width: "100%", height: "auto", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <img style={{ width: "100%", height: "auto", objectFit: "cover", position: "relative" }} src={notebook} />
      <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ border: "1px solid #E97F67", width: "75px", height: "55px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "#E97F67" }}>
          {String(day).length === 1 ? `0${day}` : day}
        </div>
        <div style={{ border: "1px solid #E97F67", width: "75px", height: "55px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "#E97F67" }}>
          {String(month).length === 1 ? `0${month}` : month}
        </div>
        <div style={{ border: "1px solid #E97F67", width: "75px", height: "55px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "#E97F67" }}>{year}</div>
      </div>
    </div>
  )
}

export default Calender
