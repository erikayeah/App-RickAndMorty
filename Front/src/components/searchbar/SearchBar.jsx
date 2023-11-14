


const SearchBar = ({onSearch}) => { //como props es un objeto con cosas, tengo que sacar a OnSearch con destructuring. Si no, deberia poner props.onSearch
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch('id temporal')}>Agregar</button> 
         {/* Lo traigo dsp de una funcion flecha porque tengo q pasar una funcion que ejecute a esa funcion, si no se va aejecutar apenas monto el componente. */}
      </div>
   );
}

export default SearchBar;