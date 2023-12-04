const express = require("express"); //instalar express
const morgan = require("morgan"); // instalar morgan
const router = require("./routes");
//* const router = require("./routes/index.js");
const server = express();
const PORT = 3001;

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
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});