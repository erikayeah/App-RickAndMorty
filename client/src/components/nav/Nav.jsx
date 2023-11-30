import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = ({ onSearch, logout }) => {
  return (
    <nav className={styles.navbar}>
      
      <SearchBar onSearch={onSearch} />

      <div className={styles.right}>
      <Link to="/home">
        <button className={styles.button}> Home </button>
      </Link>

      <Link to="/favorites">
        <button className={styles.button}> Favorites </button>
      </Link>

      <Link to="/about">
        <button className={styles.button}> About </button>
      </Link>

      <button className={styles.button} onClick={logout}> Log out </button>

      </div>
      

    </nav>
  );
};

export default Nav;

