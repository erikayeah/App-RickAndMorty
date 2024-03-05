import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
const VITE_URL_API = "https://app-rickandmorty-xyvj.onrender.com";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${VITE_URL_API}/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      {/* traemos con character. porque ahora es nuestro estado local, character, quien tiene la info de data, asi lo seteamos. */}
      <img className={style.image} src={character?.image} alt="" />

      <div className={style.text}>
        <h2> {character?.name} </h2>
        <h3> 🪪 {character?.id}</h3>
        {character?.status === "Alive" && (
          <h3 className={style.h3}> 😊 {character?.status}</h3>
        )}
        {character?.status === "Dead" && (
          <h3 className={style.h3}> 😵 {character?.status}</h3>
        )}
        {character?.status === "unknown" && (
          <h3 className={style.h3}> 🤔 {character?.status}</h3>
        )}
        <h3> 🧬 {character?.species}</h3>
        {character?.gender === "Female" && <h3> ♀ {character?.gender} </h3>}
        {character?.gender === "Male" && <h3> ♂ {character?.gender} </h3>}
        {character?.gender === "Genderless" && <h3> ⚧ {character?.gender} </h3>}
        {character?.gender === "unknown" && <h3> ❔ {character?.gender} </h3>}
        <h3> 📍 {character?.origin?.name}</h3>
      </div>
    </div>
  );
};

export default Detail;
