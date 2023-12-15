const { Favorite } = require("../DB_connection");

//* /rickandmorty/fav/:id
//* /rickandmorty/fav/2
//*No valido el Id porque si no hay id, no hay ni ruta, por ende si estoy en esta ruta es porque si o si hay id.
const deleteFav = async (req, res) => {
  try {
      const { id } = req.params;

      await Favorite.destroy({ where: { id: id } }); //Elimino el id. Por ECMAS6 podria ser solo { id }

      const allFavorites = await Favorite.findAll(); //busco todos los que quedan y eso va en res.

      return res.status(200).json(allFavorites);

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = deleteFav;