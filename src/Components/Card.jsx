import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Fab from "@mui/material/Fab";
//import DeleteIcon from "@mui/icons-material/Delete";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.nombre}</h2>
        <Avatar image={props.image} />
      </div>
      <Details costo={props.costo} descr={props.descr} />
      <Fab onClick={props.deleteCard}>
        +
      </Fab>
    </div>
  );
}

export default Card;
