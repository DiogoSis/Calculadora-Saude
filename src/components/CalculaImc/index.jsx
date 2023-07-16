import React, { useEffect, useState } from 'react';

function CalculaIMC( {altura, peso} ) {
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    calcularIMC();
  }, [altura, peso]);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));
  };

  return (
    <div>
      <h2>IMC (Índice de Massa Corporal)</h2>
      <p>IMC: {resultado}</p>
    </div>
  );
}

export default CalculaIMC;