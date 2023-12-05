/*let React = require("react");
let ReactDOM = require("react-dom");*/
import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./Components/App";

//Usando React
//ReactDOM.render(<h1>Holis</h1>, document.getElementById("asdf"));

//Usando JS Vanilla
/*let h1 = document.createElement("h1");
h1.innerHTML = "Hola con JS";
document.getElementById("asdf").appendChild(h1);*/


function suma(val1, val2) {
    if (val1 && val2) {
        return val1+val2;
    }
    return 0;
}
//Insertar variables en React
//Las expresiones se pueden colocar dentro de llaves para que sean evaluadas.
//Las sentencias no se pueden colocar.
/*let firstName = "Jonathan";
let lastName = "Duran";
const customStyle = {
    color: "blue",
    border: "1px solid black"
}
customStyle.color = "red";
ReactDOM.render(
    <div>
    <h1 style={customStyle}>Holis</h1>
    <p>Hola {firstName} {lastName} {suma(null,6)}</p>
    <p contentEditable="true" spellCheck="false" className="algo">Copyright {new Date().getFullYear()}. Todos los derechos reservados.</p>
    </div>
, document.getElementById("asdf"));*/

//Mostrar un mensaje que cambie su contenido y su apariencia
//dependiendo de la hora del día:
// - De 5 a 12 hrs, "Ya levántate!" color azul
// - De 12 a 19 hrs "Ponte a chambear!" color rojo
// - De 19 a 5 hrs "A mimir!" color negro

let hour = new Date().getHours();
let msg = "A mimir!";
const color = {
    color: "black"
};
if (hour > 5 && hour <= 12) {
    color.color = "blue";
    msg = "Ya levántate!";
}
if (hour > 12 && hour <= 19) {
    color.color = "red";
    msg = "Ponte a chambear!";
}

const asdf = document.getElementById("asdf");
const root = createRoot(asdf);
/*root.render(
    <StrictMode>
    <div>
        <h1>Programa de la hora</h1> 
        <p style={color}>{msg}</p>
    </div>
    </StrictMode>);*/


//Renderizar componente App
createRoot(document.getElementById("asdf")).render(<App />);














