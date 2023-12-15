const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (email && password) {
      const actualUser = await User.findOne({
        //await porque voy a consultar a la base de datos
        where: { email }, //Por ECMAS6 eso es lo mismo que decir email : email
        //*findOne => Si encontro {datos Usuario}, si no, undefined.
      });

      if (actualUser) {
        if (actualUser.password === password) {
          return res.status(200).json({
            access: true,
          });
        }
      }
      return res.status(404).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = login;
