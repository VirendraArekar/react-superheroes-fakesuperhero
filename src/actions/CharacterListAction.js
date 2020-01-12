import {
    CHARACTERLIST_LOADING, CHARACTERLIST_DETAILS_DATA, CHARACTERLIST_DETAIL_INITIAL_STATE,CHARACTERLIST_DETAIL_DATA_ERROR
} from '../constants';


export const LoadCharactersList = () => {
  return (dispatch) => {
    dispatch({ type: CHARACTERLIST_LOADING });
    const data = require("../data/characters.json");
       if(data.length > 0) {
           dispatch({ type: CHARACTERLIST_DETAILS_DATA, payload: data });
      }
      else {
        dispatch({ type: CHARACTERLIST_DETAIL_DATA_ERROR, payload: 'error' });
      }
    };
};


export const initialCharacterListData = () => {
  return {
    type: CHARACTERLIST_DETAIL_INITIAL_STATE,
    payload: ''
  };
};
