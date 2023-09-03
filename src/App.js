import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import logo from './darth-vader.png';

//import Text from './components/Text/Text';
//import Button from './components/Button/Button';

function App() { 
  
  let [text, setText] = useState("");
  let [personagem, setPersonagem] = useState("");

  //console.log(personagem)
    const GetName = () => {
//      console.log({text})
      
      axios.defaults.baseURL = "https://swapi.dev"
//      console.log({text})
      axios
      .get("/api/people/?search="+{text}.text)
      .then(res => {
        //console.log(res)
       // const { dados } = res;
       
        const dados = res.data;
        setPersonagem(dados);
        console.log(dados)
       // console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
    }
   
  return (
    <div className = 'App'>      
      <header className = 'App-header'>

        <img src = {logo} className = "App-logo" alt = "logo" />
        <p>Desafio FullStack 0.1 beta</p>

        <div className="Text-basic">
           <input 
            type = "text" 
            value = {text} 
            onChange = { e => setText(e.target.value)} 
            className = "textInput" 
            placeholder = 'Digite o nome do seu personagem favorido do Star Wars'/>
        </div>

        <div>
            <button className="Button-Basic"
                type="submit"
                onClick={GetName}
            >
                May the force be with you
            </button>
        </div>

        <div className='Text-basic'>

          <label>
            Os dados deveriam estar aqui, mas só no console por enquanto.
          </label>

    
        </div>

        <a
          className = "App-link"
          href = "https://swapi.dev/"
          target = "_blank"
          rel = "noopener noreferrer"
        >
          SWAPI
        </a>

      </header>
    </div>
  );  
}

export default App;

  /* Parte do código que estava tentando componentizar */

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio FullStack 0.2 beta
        </p>

        <Text />
        <Button />

        <a
          className="App-link"
          href="https://swapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SWAPI
        </a>
      </header>
    </div>
  );

  */