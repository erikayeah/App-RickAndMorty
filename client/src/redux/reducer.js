import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, REMOVE_ALL_FAV} from './action-types';


const initialState = {
   myFavorites: [],
   allCharacters: []

}
const reducer = (state = initialState, {type, payload}) => { 
   switch (type) {
         case ADD_FAV:{
            return {
               ...state,
               allCharacters: [...state.allCharacters, payload],
               myFavorites: [...state.allCharacters, payload]
            }
         }

         case REMOVE_FAV:{
         const filteredFavs = state.allCharacters.filter(
            favorite => favorite.id !== Number(payload)
            );
            return {
               ...state,
               allCharacters: filteredFavs,
               myFavorites: filteredFavs
            }
         }

         case REMOVE_ALL_FAV:{
               return {
                  ...state,
                  allCharacters: [],
                  myFavorites: []
               }
            }

         case FILTER:{
            //* { type: FILTER, payload: "FEMALE" }
            if(payload === "All") return {
              ...state,
              myFavorites: state.allCharacters
            }
            const filteredFavs = state.allCharacters.filter(
              char => char.gender === payload
            )
            return {
              ...state,
              myFavorites: filteredFavs
            }
          }

         case ORDER:{
            const orderCopy = [...state.myFavorites];
            if (payload === "A")
               orderCopy.sort( (a, b) => a.id - b.id ); //le paso cb a sort para q sepa q quiero de menor a mayor.
            if (payload ==="D")
               orderCopy.sort( (a, b) => b.id - a.id );
            return { //retorno la nueva version del estado
               ...state,
               myFavorites: orderCopy
            }}

         default :
         return {...state}
   }
}

export default reducer;