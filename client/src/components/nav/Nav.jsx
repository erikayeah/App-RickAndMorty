import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { IoHome } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const Nav = ({ onSearch, logout, clear }) => {

  
  
  return (
    <nav className={styles.navbar}>
      <SearchBar onSearch={onSearch} clear={clear} />

      <div className={styles.right}>
        <Link to="/home">
          <IoHome className={styles.button} />
        </Link>

        <Link to="/favorites">
          <MdFavorite className={styles.button} />
        </Link>

        <Link to="/about">
          <FaInfoCircle className={styles.button} />
        </Link>

        <Link>
          <BiLogOut className={styles.button} onClick={logout} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
