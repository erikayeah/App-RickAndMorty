import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from "axios";


export const addFav = (character) => {
  const endpoint = 'http://localhost:1000/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      /*
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
      */
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
  const endpoint = 'http://localhost:1000/rickandmorty/fav/' + id;
  const {data} = await axios.delete(endpoint)
  
  dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  };

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}