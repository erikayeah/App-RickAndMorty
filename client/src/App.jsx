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

function App() {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        if (!characters.some((character) => character.id === data.id)) {
          setCharacters((oldChars) => [data, ...oldChars]);
        } else {
          window.alert("¡Ya existe un personaje con este ID!");
        }
      } else {
        window.alert("¡El ID debe ser un numero entre 1 y 826!");
      }
    });
    navigate("/home"); //para que al agregar un id o random, me lleve de nuevo a home a las cartas.
  };

  const onClose = (id) => {
    const filteredClose = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredClose);
    dispatch(removeFav(id)); //Esta linea hace que si lo elimino de home, se me elimina de favoritos tmb
  };


//*LOGIN
  const [access, setAccess] = useState(false);
  const EMAIL = "henry@gmail.com";
  const PASSWORD = "clave123";


  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert('credenciales incorrectas'); //Para avisar que algo esta incorrecto.
    }
  };

  const logout = () => {
    setAccess(false);
    setCharacters([]); //Para que se resetee home si hago logOut.
  };
  
  useEffect(() => {
    //* !access && navigate("/"); ASI DEBERIA QUEDAR LUEGO
    !access && navigate("/home"); //Logueo momentaneo automatico: si ya probe que mi logueo anda, pongo esto para no tener q cargar datos cada vez que sigo probando otras cosas. Es hasta antes de sacarlo a produccion.
  }, [access]);


  return (
    <div className="App">
      {pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null}

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
