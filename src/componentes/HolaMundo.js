import React from "react";

//var -> comun -> cambiarle datos
//let -> bloque de codigo -> cambiarle datos
//const -> valor fijo -> NO se puede cambiar

const HolaMundo = () => {
  const red = "container-red";
  const saludo = "Hola Erick";
  const esVerdadero = true;

  return (
    <div className={red}>
      <h1>{saludo}</h1>
      {esVerdadero ? "Verdadero" : "Falso"}
    </div>
  );
};

export default HolaMundo;
