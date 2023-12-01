import {ADD_FAV, REMOVE_FAV, ORDER, FILTER, REMOVE_ALL_FAV} from './action-types';

export const addFav = (character) => {
   return {
      type: ADD_FAV,
      payload: character
   }
};

export const removeFav = (id) => {
   return {
      type: REMOVE_FAV,
      payload: id
   }
};

//! inicia modificacion

export const removeAllFav = () => {
   return {
      type: REMOVE_ALL_FAV,
   }
};
//! termina modificacion

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender
   }
};

export const orderCards = (order) => {
   return {
      type: ORDER,
      payload: order
   }
};