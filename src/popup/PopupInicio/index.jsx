import React, { useState } from "react"
import styles from "./PopupInicio.module.css"
import { NumberFormatBase } from "react-number-format"


function PopupInicio ({onClose}){
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const formatCel = (value) =>{
    const numericValue = value.replace(/\D/g, "")
    const formatvalue = numericValue.replace(
      /^(\d{2})(\d{5})(\d{4}).*/,
      "($1) $2-$3"
    )
    return formatvalue
  }
  const handlePhoneChange = (e) =>{
    const formatvalue = formatCel(e.target.value)
    setPhone(formatvalue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (!name || !phone){
      setErrorMessage('Por favor, preencha todos os Campos.')
      return
    }

    onClose({
      name,
      phone,
      email: email || '',
    })
  }
  return(
    <div className={styles.popup}>
      <form onSubmit={handleSubmit}>
        <h2>Preencha seus dados</h2>

        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" value={name} 
          placeholder="Digite seu nome" 
          onChange={(e) => setName(e.target.value)} 
        />

        <label htmlFor="phone">Telefone:</label>
        <input 
          type="text" 
          id="phone" 
          inputMode="numeric"
          value={phone} 
          placeholder="Digite seu whatsapp" 
          onChange={handlePhoneChange} 
        />

        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          placeholder="Digite seu melhor E-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Enviar</button>

        {errorMessage && <p className="error-menssage">{errorMessage}</p>}
      </form>
    </div>

  )
}

export default PopupInicio;