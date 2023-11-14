import SearchBar from '../searchbar/SearchBar';


const Nav = ({onSearch}) => {


   return (
      <div>

         <SearchBar onSearch = {onSearch}/>

      </div>
   )
}

export default Nav;