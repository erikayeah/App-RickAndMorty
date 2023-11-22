import { useState, useEffect } from "react";
import validation from "../../utils/validation";

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
    <div>
      <form onSubmit={hanleSubmit}>
        <label> Email </label>
        <input
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Ingrese su email"
          onChange={handleChange}
        />
        <p style={{ color: "coral" }}>{errors.email ? errors.email : null}</p>

        <label> Password </label>
        <input
          type="password"
          key="password"
          name="password"
          placeholder="ingrese su contraseña"
          value={userData.password}
          onChange={handleChange}
        />
        <p style={{ color: "coral" }}>{errors.password && errors.password}</p>

        <br />
        
        <button 
        type="submit"
        disabled={errors.email || errors.password} // Si existe error en email o password deshabilitalo
        > Ingresar </button>
      </form>
    </div>
  );
};

export default Form;
