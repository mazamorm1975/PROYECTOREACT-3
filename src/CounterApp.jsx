import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const CounterApp = ({valor}) =>{

  const [contar, setContar] = useState(valor);

  const incrementarValor = () => setContar(c => c +1);

  return (
    <>
    <h2>Contador Incrementador {contar}</h2>
    <button
      onClick={incrementarValor}
    >Incrementar en 1</button>

    </>
  )}