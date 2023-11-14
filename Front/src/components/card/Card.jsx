


const Card = ({name, id, status, species, gender, origin, image, onClose}) => { //destructuring de las pripierdades del objeto props. si no seria props sin {}, y abajo props.name y asi.
   return (
      <div>
         <button onClick={() => onClose(id) }> X </button>
         <h2> {name}</h2>
         <h3> Status: {status}</h3>
         <h3> Species: {species}</h3>
         <h3> Gender: {gender}</h3>
         <h3> Origin: {origin.name}</h3>
         <img src={image} alt={name} />
      </div>
   );
}

export default Card;