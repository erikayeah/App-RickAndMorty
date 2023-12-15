require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel =require("./models/Favorite");
const UserModel =require ("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

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
