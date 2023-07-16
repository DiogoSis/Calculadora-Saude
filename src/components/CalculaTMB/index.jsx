import React from 'react';


function TMBCalculator({sexo, idade, altura, peso}) {
  const calcularTMB = () => {
    let tmb = 0;

    if (sexo === 'masculino') {
      tmb = 66 + 13.75 * peso + 6.75 * altura - 6.75 * idade;
    } else if (sexo === 'feminino') {
      tmb = 655 + 9.56 * peso + 1.85 * altura - 4.68 * idade;
    }

    return tmb.toFixed(2);
  };

  const tmb = calcularTMB();

  return (
    <div>
      <h2>Taxa Metabólica Basal</h2>
      <p>TMB: {tmb} calorias</p>
    </div>
  );
}



export default TMBCalculator;
