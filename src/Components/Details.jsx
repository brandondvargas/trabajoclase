import React from "react";

function Details(props) {
  return (
    <div className="bottom">
      <p className="info">{props.costo}</p>
      <p className="info">{props.descr}</p>
    </div>
  );
}

export default Details;
