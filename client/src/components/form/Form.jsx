import { useState, useEffect } from "react";
import validation from "../../utils/validation";
import styles from "./Form.module.css";
import Frases from "../frases/Frases";
import form from "../../assets/image/form.jpg";

const Form = ({ login, guest }) => {
  useEffect(() => {
    document.body.style.backgroundImage = { form };
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

  const handleGuest = (event) => {
    guest();
  };

  return (
    <div className={styles.body}>
      <div>
        <Frases />
      </div>

      <div className={styles.form}>
        <form onSubmit={hanleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.inputBox}
              type="text"
              key="email"
              name="email"
              value={userData.email}
              placeholder="Enter your email"
              autoComplete="off"
              onChange={handleChange}
            />
            <span className={styles.underline}></span>
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <div className={styles.inputWrapper}>
            <input
              className={styles.inputBox}
              type="password"
              key="password"
              name="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleChange}
            />
            <span className={styles.underline}></span>
          </div>
          {errors.email && <p className={styles.error}>{errors.password}</p>}

          <button
            className={styles.button}
            type="submit"
            disabled={errors.email || errors.password}
          >
            {" "}
            Login{" "}
          </button>
        </form>

        <button className={styles.button} onClick={handleGuest}>
          {" "}
          Enter as a guest{" "}
        </button>
      </div>
    </div>
  );
};

export default Form;
