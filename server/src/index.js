const express = require("express"); //instalar express
const morgan = require("morgan"); // instalar morgan
const router = require("./routes");
//* const router = require("./routes/index.js");
const server = express();
const PORT = 3001;
const {conn} =require("./DB_connection");


//* Middlewares
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      });
      server.use(express.json()); //Para usar y recibir info por body.
      server.use(morgan("dev"));
      
      server.use("/rickandmorty", router);
      
      //* Sincronizar la instancia de sequelize al servidor, que al levantar servidor se sincronice a la BD.
      conn.sync({ force: false}) //Retorna una promesa
         .then (() => {
            server.listen(PORT, () => {
               console.log('Server raised in port: ' + PORT);
            });
         })
         .catch(error => console.log(error.message))
      