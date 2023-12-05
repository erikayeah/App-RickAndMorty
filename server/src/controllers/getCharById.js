
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
// const API_KEY = "henrystaff";

const getCharById = async (req, res) => {
  try {
    const characterId = req.params.id;
    const { data } = await axios.get(`${URL}/${characterId}`);
    const {
      id, status, name, species, origin, image, gender, location
    } = data;
    const character = {
      id, status, name, species, origin, image, gender, location
    };
    return character.name
        ? res.json(character)
        : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;









// const getCharById =  async (req, res) => {
  
//   try { 
//     const { id } = req.params;
//     const {data } = await axios.get(`${URL}/${id}`); //* promise pending
//       //* data = { id:1, name:"Rick", ... }
   
//       const character = {
//         id: data.id, 
//         status: data.status, 
//         name: data.name, 
//         species: data.species, 
//         origin: data.origin, 
//         image: data.image , 
//         gender: data.gender, 
//         location: data.location
//       };

//       if (character.name) {
//         return res.json(character);
//       } else {
//         return res.status(404).send("Not found");
//       }
//     } catch (error) {
//         return res.status(500).send(error.message);
//       }
//     }


