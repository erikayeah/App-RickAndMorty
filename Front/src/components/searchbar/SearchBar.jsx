import {useState} from 'react';


const SearchBar = ({onSearch}) => { //como props es un objeto con cosas, tengo que sacar a OnSearch con destructuring. Si no, deberia poner props.onSearch
   
 const [id, setId] = useState('');
   
 const handleChange = (event) => {
setId (event.target.value)
 }  

 function randomNumber() {
   const numeroEnRango = Math.floor(Math.random()* 826) + 1;
   return numeroEnRango;
 }
 

   return (
      <div>
         <input type='search' value = {id} onChange = {handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button> 
         {/* Lo traigo dsp de una funcion flecha porque tengo q pasar una funcion que ejecute a esa funcion, si no se va aejecutar apenas monto el componente. */}
         <button onClick={() => onSearch(randomNumber())}>Random</button> 
      </div>
   );
}

export default SearchBar;