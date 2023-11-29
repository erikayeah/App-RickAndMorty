import Card from '../card/Card';
import style from './Cards.module.css';

const Cards = ({characters, onClose}) => { //porque aca destructuring? porque en realidad, yo recibo props: { characters: [{}, {}, {}, etc, ]}. Characters llega como un objeto aca, un objeto que es mis props defaults digamos. Por eso aca si destructuro, porque tengo q sacar characters dentro del objeto donde llego.
   return (
      <div className = {style.container}> 

         { !characters.length
         ? <h2>Por favor ingrese un ID o reciba un personaje sorpresa con el boton de regalo </h2>
         :
         characters.map((char) => ( //Tmb podria ir con destructuring de las propiedades que quisiera q saque de cada char({name, status, gender, etc})
         //OJO: Aca uso directo () para volver a jsx y renderizar codigo html entre los parentesis.
             <Card
                  key = {char.id} //Lakey aparece cuando creamos las tarjetitas, no en el componente Card, si no aca.
                  id= {char.id}
                  name = {char.name}
                  status = {char.status}
                  species = {char.species}
                  gender = {char.gender}
                  origin = {char.origin}
                  image = {char.image}
                  onClose={onClose}
            />
         )
         )}
      </div>
      );
}


export default Cards;