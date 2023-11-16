import style from '../card/Card.module.css';
import {Link} from 'react-router-dom';


const Card = ({name, id, status, species, gender, origin, image, onClose}) => { //destructuring de las pripierdades del objeto props. si no seria props sin {}, y abajo props.name y asi.
   return (
      <div className = {style.card}>
         <button onClick={() => onClose(id) }> X </button>
          <h2> {name}</h2>
         <Link to={`/detail/${id}`} >
         <img src={image} alt={name} />
         </Link>
         {/* <h3> Status: {status}</h3>
         <h3> Species: {species}</h3>
         <h3> Gender: {gender}</h3>
         <h3> Origin: {origin.name}</h3> */}
      </div>
   );
}

export default Card;