//style
import "./App.css";
//components
import About from "./components/about/About";
import Cards from "./components/cards/Cards.jsx";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
//dependences
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "henry@gmail.com";
  const PASSWORD = "clave123";

  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    !access && navigate("/");
    //* !access && navigate("/home"); //Logueo automatico: si ya probe que mi logueo anda, pongo esto para no tener q cargar datos cada vez que sigo probando otras cosas. Es hasta antes de sacarlo a produccion.
  }, [access]);

  const onSearch = (id) => {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-erikayeah`
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
  };

  return (
    <div className="App">
      {pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
