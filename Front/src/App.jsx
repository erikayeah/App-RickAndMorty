import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import {useState} from 'react';
import axios from 'axios';



function App() {

const [characters, setCharacters] = useState([]);

const onSearch = (id) => { 
  axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-erikayeah`)
  .then(
  ({ data }) => {
     if (data.name) {
        if (!characters.some((character) => character.id === data.id)) {
           setCharacters((oldChars) => [data, ...oldChars]);
         } else {
           window.alert("¡Ya existe un personaje con este ID!");
         }
       } else {
         window.alert("¡No hay personajes con este ID!");
       }
     });
   }

const onClose = (id) => {
const filteredClose = characters.filter((character) => character.id !== parseInt(id))
setCharacters(filteredClose)
}

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}


export default App;