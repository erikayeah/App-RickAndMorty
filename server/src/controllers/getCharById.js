const axios = require('axios');


const getCharById = (res, id) => {

   axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-erikayeah`)
      .then( ({data}) => {
      const character = {
            id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            status: data.status,
            image: data.image
         };

         return res
            .writeHead(200, {'Content-Type': 'application/json'})
            .end(JSON.stringify(character));
               
      })
      .catch((error) => {
         return res
            .writeHead(500, {'Content-Type': 'text/plain'})
            .end(error.message);
      });

}


module.exports = {
getCharById
}