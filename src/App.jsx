import { useEffect, useState } from 'react'
import styles from './App.module.css'
import PopupInicio from './popup/PopupInicio'
import PopupDados from './popup/PopupDados'
import CalculaIMC from './components/CalculaImc'
import TMBCalculator from './components/CalculaTMB'
import IngestaoAguaCalculator from './components/CalculaAgua'


function App() {
  const [showPopupInicio, setShowPopupInicio] = useState(true)
  const [showPopupDados, setShowPopupDados] = useState(false)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [dadosCompletos, setDadosCompletos] = useState(false);


  const handlePopupInicioClose = (data) => {
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
    setShowPopupInicio(false);
    setShowPopupDados(true);
  };

  const handlePopupDadosClose = (data) => {
    setIdade(data.idade);
    setGenero(data.genero);
    setPeso(data.peso);
    setAltura(data.altura);
    setShowPopupDados(false);
  }

  useEffect(() => {
    if (name && phone && email && idade && genero && peso && altura) {
      setDadosCompletos(true);
    } else {
      setDadosCompletos(false);
    }
  }, [name, phone, idade, genero, peso, altura, email]);


  return (
    <div className={styles.App}>
      {showPopupInicio && <PopupInicio onClose={handlePopupInicioClose} />}
      {showPopupDados && <PopupDados onClose={handlePopupDadosClose} />}

      {!dadosCompletos && <div>

      </div>}

      {dadosCompletos && (
        <div>
          <h1 className={styles.titulo}>Oi, {name}!</h1>
          {email ? (
            <h2 className={styles.subtitulo}>Acompanhe sua saúde, <br></br>estamos enviando o resultado da pesquisa para seu<br></br> Whatsapp: {phone} <br></br>e seu E-mail: {email}</h2>
          ) : (
            <h2>Acompanhe sua saúde, estamos enviando o resultado da pesquisa para seu Whatsapp {phone}.</h2>
          )}
        </div>
      )}


      {dadosCompletos && (
        <div className={styles.components}>
          <CalculaIMC altura={Number(altura)} peso={Number(peso)} />
          <TMBCalculator sexo={genero} idade={Number(idade)} altura={Number(altura)} peso={Number(peso)} />
          <IngestaoAguaCalculator idade={Number(idade)} peso={Number(peso)} />
        </div>
      )}
    </div>
  );
}

export default App
