import { useState, useEffect } from "react";
import validation from "../../utils/validation";
import styles from './Form.module.css';

const Form = ({ login }) => {

  useEffect(() => {
    document.body.style.backgroundImage = `url('/src/assets/image/form.jpg')`;
    return () => {
      document.body.style.backgroundImage = null
    }
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value, //viene asi para q agarre en tiepo real todo. Si pongo solo userData, queda desfasado el ultimo caracter para validar.
      })
    );
  };

  const hanleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.form}>
      <img src="src/assets/image/FormFrase.png" width="50%"  />

      <form onSubmit={hanleSubmit}>
        <label> Email </label>
        <input
          className={styles.input}
          type="text"
          key="email"
          name="email"
          value={userData.email}
          // placeholder="Ingrese su email"
          onChange={handleChange}
        />
        
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <hr className={styles.hr} />

        <label> Password </label>
        <input
          className={styles.input}
          type="password"
          key="password"
          name="password"
          // placeholder="ingrese su contraseña"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.password}</p>}

        <hr className={styles.hr} />
        
        <button 
        className={styles.button}
        type="submit"
        disabled={ errors.email || errors.password} // Si existe error en email o password deshabilitalo
        >Ingresar </button>
      </form>
    </div>
  );
};

export default Form;
