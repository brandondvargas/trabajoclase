import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
//import DeleteIcon from "@mui/icons-material/Delete";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.namecontact}</h2>
        <Avatar image={props.image} />
      </div>
      <Details tel={props.tel} email={props.email} />
      <Fab onClick={props.deleteCard}>
        Borrar
      </Fab>
    </div>
  );
}

export default Card;
