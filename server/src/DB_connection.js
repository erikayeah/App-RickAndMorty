require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DBRENDER } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const sequelize = new Sequelize(DBRENDER, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Puedes ajustar esto según la configuración del servidor PostgreSQL
    },
  },
});

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//*Instanciar los modelos:
FavoriteModel(sequelize); //porque en archivos, esta esperando sequelize como props para usar sus metodos correspondientes.
UserModel(sequelize);
//* sequelize = { models: {Favorites, User} }
//* Nuestro OMR genera los comandos SQL para generar las tablas en la base de datos.
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models; //Destrucutring de las lineas de arriba en donde ahora sequelize es un objeto con mis modelos dentro.

//* User     N:N Favorite
User.belongsToMany(Favorite, { through: "user_favorite" });
//* Favorite N:N User
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
