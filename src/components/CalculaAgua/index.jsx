import React from 'react';

function IngestaoAguaCalculator({idade, peso }) {
  const calcularIngestaoAgua = (peso) => {
    const ingestaoAgua = Number(peso) * 35;

    const litros = Math.floor(ingestaoAgua / 1000)
    const ml = ingestaoAgua % 1000

    return `${litros} litro(s) e ${ml} ml/dia`
  };

  const ingestaoAgua = calcularIngestaoAgua(peso);

  return (
    <div>

      <h2>Ingestão recomendada de Água</h2>
      <p>Diária: {ingestaoAgua} ml.</p>
    </div>
  );
}

export default IngestaoAguaCalculator;
