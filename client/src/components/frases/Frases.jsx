import { useState, useEffect } from "react";
import style from './Frases.module.css';

const Frase = () => {
  // Estado para almacenar las frases y el índice actual
  const [frases, setFrases] = useState( [
   "'Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión.'",
   "'A veces la ciencia es mucho más arte que ciencia, Morty. Mucha gente no entiende eso'",
   "'Pero los discursos son para hacer campaña. Ahora es el momento para la acción.'",
    "'Estás creciendo, Morty. Creciendo como una enorme espina dentro de mi trasero.'",
   "'Escucha, Morty, odio decirte esto pero eso que la gente llama «amor» es sólo una reacción química que obliga a los animales a reproducirse.'",
   "'Deberías aprender a tener un poco de respeto por los tontos del universo.'",
   "'Ni lo entiendo, ni necesito entenderlo.'",
   "'Podríamos disfrutarlo un rato. Es decir, mira lo loco que es todo.'",
   "'No lo sé Morty, quizá me odie a mí mismo o puede que crea que merezco morir. Necesitamos vacaciones.'",
   "'Odio este lugar Morty, no aguanto la burocracia. No me gusta que me digan a dónde he de ir o lo que tengo que hacer, es un atropello.'" ,
   "'Cuando sabes que nada importa, el universo es tuyo. Y nunca he visto un universo al que le gustara eso.' ",
   "'No odies al jugador, odia al juego, hijo.'",
   "'¿Cuál es mi propósito?'",
    ]);
  const [indice, setIndice] = useState(0);

  // Función para cambiar la frase al siguiente índice
  const cambiarFrase = () => {
    setIndice((prevIndice) => (prevIndice + 1) % frases.length);
  };

  return (
    <div className={style.container}>
      <p className={style.frase}>{frases[indice]}</p>
      <button className={style.button}onClick={cambiarFrase}> Rick's Wisdom </button>
    </div>
  );
};

export default Frase;
