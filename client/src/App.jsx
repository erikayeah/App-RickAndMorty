//style
import "./App.css";
//components
import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
import Favorites from './components/favorites/Favorites';

//dependences
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./redux/action";

const App = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const [characters, setCharacters] = useState([]);


  async function onSearch(id) {
    try {
       //* Verificar si existe character:
       const characterId = characters.filter(
          char => char.id === Number(id)
       )
       if(characterId.length) {
          return alert(`${characterId[0].name} ya existe!`)
       }

       const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
       if (data.name) {
          setCharacters([...characters, data]);
          navigate("/home");
       } else {
          alert('¡El id debe ser un número entre 1 y 826!');
       }
    } catch (error) {
       alert("¡El id debe ser un número entre 1 y 826!");
    }
 }
  
//   const onSearch = async (id) => {
//   try {
//   const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`) // Para desestructurar data, necesito si o si el await.

//       if (data.name) {
//         if (!characters.some((character) => character.id === data.id)) {
//           setCharacters((oldChars) => [data, ...oldChars]);
//         } else {
//           window.alert("¡Ya existe un personaje con este ID!");
//         }
//       };
//     navigate("/home"); //para que al agregar un id o random, me lleve de nuevo a home a las cartas.
//   } catch (error) {
//     indow.alert("¡El id debe ser un numero entre el 1 y el 826!");
//   }
// }

  const onClose = (id) => {
    const filteredClose = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredClose);
    dispatch(removeFav(id)); //Esta linea hace que si lo elimino de home, se me elimina de favoritos tmb
  };


//*LOGIN
  const [access, setAccess] = useState(false);
  // const EMAIL = "henry@gmail.com";
  // const PASSWORD = "clave123";


const login = async (userData) => {
  try {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const response = await axios.get(URL + `?email=${email}&password=${password}`);
    const {data} = response;
    const { access } = data;

    if(access) {
        setAccess(data);
        navigate('/home');
    } else {
        alert("Credenciales incorrectas!");
    }
  } catch (error) {
      throw error;
     }
    };



  const logout = () => {
    setAccess(false);
    setCharacters([]); //Para que se resetee home si hago logOut.
    navigate("/")
  };

  const clear = () => {
    setCharacters([])
    navigate("/home"); //Ver si al limpiar hago redireccione a home o no
  }
  
  useEffect(() => {
    //* !access && navigate("/"); ASI DEBERIA QUEDAR LUEGO
    !access && navigate("/"); //Logueo momentaneo automatico: si ya probe que mi logueo anda, pongo esto para no tener q cargar datos cada vez que sigo probando otras cosas. Es hasta antes de sacarlo a produccion.
  }, [access]);



  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} clear ={clear} /> }

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
