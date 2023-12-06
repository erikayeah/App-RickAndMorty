import { useState, useEffect } from "react";
import validation from "../../utils/validation";
import styles from "./Form.module.css";
import Frases from "../frases/Frases";

const Form = ({ login }) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('/src/assets/image/form.jpg')`;
    return () => {
      document.body.style.backgroundImage = null;
    };
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
    <div className={styles.body}>
      <div>
        <Frases />
      </div>

      <div className={styles.form}>
        <form onSubmit={hanleSubmit}>

          {/* <label> Email </label> */}
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputBox}
              type="text"
              key="email"
              name="email"
              value={userData.email}
              placeholder="Enter your email"
              // placeholder="Ingrese su email"
              onChange={handleChange}
            />
            <span className={styles.underline}></span>
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          {/* <hr className={styles.hr} /> */}

          {/* <label> Password </label> */}
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputBox}
              type="password"
              key="password"
              name="password"
              placeholder="Enter your password"
              // placeholder="ingrese su contraseña"
              value={userData.password}
              onChange={handleChange}
            />
            <span className={styles.underline}></span>
          </div>
          {errors.email && <p className={styles.error}>{errors.password}</p>}
{/* 
          <hr className={styles.hr} /> */}

          <button
            className={styles.button}
            type="submit"
            disabled={errors.email || errors.password} // Si existe error en email o password deshabilitalo
          >
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
      {/* <img src="src/assets/image/FormFrase.png" width="20%"  /> */}
    </div>
  );
};

export default Form;
