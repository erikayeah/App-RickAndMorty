import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import Card from "../card/Card";
import style from './Favorites.module.css'


const Favorites = ({onClose}) => {

   const myFavorites = useSelector ( state => state.myFavorites);

   const dispatch = useDispatch();

   const handleOrder = event => {
   dispatch(orderCards(event.target.value));
   }

   const handleFilter = event => {
   dispatch(filterCards(event.target.value));
   }

   return (

   <div> 
         {/* DIV que encierra todo */}

         <div>
            {/* div que encierra filtros */}
            <select className={style.select} name="order" onChange={handleOrder}>
               <option value="A"> Ascendente </option>
               <option value="D"> Descendente </option>
            </select>

            <select className={style.select} name="filter" onChange={handleFilter}>
               <option value="All"> All </option>
               <option value="Male"> Male </option>
               <option value="Female"> Female </option>
               <option value="Genderless"> Genderless </option>
               <option value="unknown"> unknown </option>
            </select>
         </div>

         <div className = {style.container}> 
          {/* DIV DEL CARD */}

            { !myFavorites.length
            ? <h2 className={style.h2} >Add your first favorite! </h2>
            :
            myFavorites.map(char => ( //Tmb podria ir con destructuring de las propiedades que quisiera q saque de cada char({name, status, gender, etc})
            //OJO: Aca uso directo () para volver a jsx y renderizar codigo html entre los parentesis.
            <Card
            key = {char.id} //Lakey aparece cuando creamos las tarjetitas, no en el componente Card, si no aca.
            id= {char.id}
            name = {char.name}
            image = {char.image}
            gender = {char.gender}
            onClose={onClose}
            />
            ))
            }
{/*En vez de renderizar de nuevo, tambien puedo traerme a Cards y pasarle mi favorites, asi: */}
{/* <Cards characters = {myFavorites} onClose={onClose} /> */}
{/* Detalle, solo me traje characters de Cards, no onClose, asi que en favoritos, ese boton no funciona ni se renderiza. */}
         </div>
   </div>
   );
}

export default Favorites;