//style
import './App.css';
//components
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Error from './components/error/Error'
//dependences
import axios from 'axios';
import {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';



function App() {

const [characters, setCharacters] = useState([]);
const navigate = useNavigate();

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
         navigate('/home'); //para que al agregar un id o random, me lleve de nuevo a home a las cartas.
    }

const onClose = (id) => {
const filteredClose = characters.filter((character) => character.id !== parseInt(id))
setCharacters(filteredClose)
}

   return (


      <div className='App'>
         
         <Nav onSearch = {onSearch}/>
         
         <Routes>
            <Route path='/home' element ={<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path= '/about' element = {<About/>}/>
            <Route path= '/detail/:id' element = {<Detail/>}/>
            <Route path= '*' element = {<Error/>}/>


         </Routes>


      </div>
   );
}


export default App;