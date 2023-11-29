const http = require("http");
const PORT = 3001;
const characters = require('./utils/data')

http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*'); //Le da acceso al front. Con * digo q cualquiera puede acceder.

   if (req.url.includes('/rickandmorty/character')){

      const id = req.url.split('/').pop(); //.at(-1) tambien.
      const character = characters.find( //Con filter no nada, dsp veamos porque
         char => char.id === Number(id)
         );

         if (character) {
            return res
               .writeHead(200, {'Content-Type': 'application/json'})
               .end(JSON.stringify(character));
         } else {

            return res
               .writeHead(404, {'Content-Type': 'application/json'})
               .end(JSON.stringify({message: 'No existen personajes con ese ID'}));
         }
    }

    return res
         .writeHead(404, {'Content-Type': 'application/json'})
         .end(JSON.stringify({message: 'Esa URL no existe'}));

})
   .listen(PORT, '127.0.0.1',
   () => (console.log(`Server listening on port ${PORT}`)) //Este es un cb extra que nos dio el profe. un mensajito extra.
); //Siempre cierro con .listen y debo pasarle el port, y la mascara de subred. el numero, o localhost.


