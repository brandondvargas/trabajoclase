import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function FormTarjetas(props) {
  return (
    <div>
      <TextField
        className="inp"
        variant="outlined"
        label="Nombre"
        onChange={props.nameHandler}
        name="fName"
        placeholder="Nombre"
      />
      <TextField
        className="inp"
        variant="outlined"
        label="Teléfono"
        onChange={props.telHandler}
        name="tel"
        placeholder="Telefono"
      />
      <TextField
        variant="outlined"
        onChange={props.mailHandler}
        label="Email"
        name="email"
        placeholder="Email"
      />
      <Button variant="contained" onClick={props.addContact}>
        Submit
      </Button>
    </div>
  );
}

export default FormTarjetas;
