import React from "react";
import { useState, useEffect } from "react"
import styles from "./PopupDados.module.css"

function PopupDados({ onClose }) {
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  useEffect(() =>{
    setIdade(idade.replace(/\D/g, ""))
    setAltura(altura.replace(/\D/g, ""))
    setPeso(peso.replace(/\D/g, ""))
  }, [idade, altura, peso])

  // const numeroFormatado = (value) =>{
  //   const valorNumero = value.replace(/[^0-9]/g, '')
  //   const valorFormatado = valorNumero.replace(/(\d+)(\d{2})$/, '$1.$2')
  //   return valorFormatado
  // }
  const handleIdadeChange = (e) => {
    setIdade(e.target.value.replace(/\D/g, ""))
  };


  const handlePesoChange = (e) => {
    setPeso(e.target.value.replace(/\D/g, ""))
  };

  const handleAlturaChange = (e) => {
    setAltura(e.target.value.replace(/\D/g, ""))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idade && genero && peso && altura) {
      onClose({
        idade:Number(idade),
        genero,
        peso: Number(peso),
        altura: Number(altura),
      });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className={styles.popup}>
      <form onSubmit={handleSubmit}>
        <h2>Preencha seus dados</h2>

        <label htmlFor='age'>Idade:</label>
        <input
          type='text'
          id='age'
          inputMode="numeric"
          placeholder="Digite a sua idade"
          value={idade}
          onChange={handleIdadeChange}
        />

        <div>
          <label>Sexo:</label>
          <label htmlFor='male'>Masculino</label>
          <input
            type='radio'
            id='male'
            name='genero'
            value='masculino'
            checked={genero === 'masculino'}
            onChange={(e) => setGenero(e.target.value)}
          />
          <label htmlFor='female'>Feminino</label>
          <input
            type='radio'
            id='female'
            name='genero'
            value='feminino'
            checked={genero === 'feminino'}
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>

        <label htmlFor='peso'>Peso (kg):</label>
        <input
          type="text"
          id='peso'
          inputMode="numeric"
          value={peso}
          placeholder="Digite seu peso"
          onChange={handlePesoChange}
        />

        <label htmlFor='altura'>Altura (cm):</label>
        <input
          type="text"
          id='altura'
          inputMode='numeric'
          value={altura}
          placeholder="Digite sua Altura"
          onChange={handleAlturaChange}
        />

        <button type='submit'>Calcular</button>
      </form>
    </div>
  );
}

export default PopupDados;
