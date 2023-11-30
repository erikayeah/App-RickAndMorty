const axios = require('axios');


const getCharById = (res, id) => {

   axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-erikayeah`) 
   //* Retorna una promesa en esatdo pending. Si quieroq ue resuelva y me traiga o de la caja verde o roja, sigue el .then
      .then( ({data}) => {
         //* res seria mi caja verde.
      const character = {
            id: data.id, // O es id: data.id
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            status: data.status,
            image: data.image,
            location: data.location
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