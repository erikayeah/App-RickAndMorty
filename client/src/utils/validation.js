const validation = (userData) => {
  const errors = {};

  if (!/\S+@\S+/.test(userData.email)) {
    errors.email = "Debe ser un email válido";
  }

  if (userData.email === "") {
    errors.email = "El email no puede estar vacio";
  }

  if (userData.email.length > 36) {
    errors.email = "El email no debe ser mayor a 35 caracteres";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener de 6 a 10 caracteres";
  }

  return errors;
};

export default validation;
