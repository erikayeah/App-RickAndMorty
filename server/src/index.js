const http = require("http");
const data = require('./utils/data')

http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');

   if (req.url.includes('/rickandmorty/character')){

      const id = req.url.split('/').pop(); // o metodo pop.
      const characterFound = data.find((character) => character.id === Number(id));

      if (characterFound) {
         return res 
            .writeHead(200, {'contenty-type': 'application/json'})
            .end(JSON.stringify(characterFound));
      }

      return res
         .writeHead(404, {'content-type' : 'application/json'})
         .end(JSON.stringify({error: 'No existen personajes con ese ID'}));
      }
}).listen(3001, '127.0.0.1');