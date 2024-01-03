import { useState } from "react";
import { PropTypes } from "prop-types";

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ valor }) => {
  const [contador, setContador] = useState(valor);
  const autoIncrementador = () => setContador((c) => c + 1);

  return (
    <>
      <h1>Autoincrementador {contador}</h1>
      <button onClick={autoIncrementador}>Incrementar valor en {valor}</button>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  valor: 1000,
};
