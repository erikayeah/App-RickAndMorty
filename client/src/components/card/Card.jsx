import style from './Card.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {removeFav, addFav} from '../../redux/action'
import { useState, useEffect } from 'react';



const Card = ({name, id, image, gender, onClose}) => { //destructuring de las pripierdades del objeto props. si no seria props sin {}, y abajo props.name y asi.
   
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites); //Tmb {myFavorites = useSelector (state => state)}, con destructuring.
  
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

/* Version bucle for
useEffect(() => {
for ( let i = 0; i < myFavorites.length; i ++) {
if (myFavorites[i].id === props.id) {
   setIsFav(true)
}}
}, [myFavorites, props.id]
*/

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id)); //Si yo no hubiera hecho destructuring ariba, esto seria props.id
      } else {
         setIsFav(true);
         dispatch(addFav({name, id, gender,image, onClose})); //Mismo caso si no hubiera hecho destructuring, seria props solo.
      }
   };
/*Version en ternario
   const handleFavorite = () => {
   isFav ? (setIsFav(false), dispatch(removeFav(id))) : (setIsFav(true), dispatch(addFav(props)));
}; */

   
   return (
      <div className={style.containerCard}>

         {isFav ? (<button className={style.buttonCard} onClick={handleFavorite}>❤️</button>) 
         : (<button className={style.buttonCard} onClick={handleFavorite}>🤍</button>)}

         {/* {pathname !== '/favorites' ? <button onClick={() => onClose(id) }> X </button> : ''} */}
         < button className={style.buttonCard} onClick={() => onClose(id) }> ❌ </button>

         <Link to={`/detail/${id}`} >
         <img className = {style.imageCard} src={image} alt={name} />
         </Link>
         
          <h2 className={style.nameCard}> {name}</h2>
          {/* <h3>{gender}</h3> */}
      </div>
   );
}

export default Card;