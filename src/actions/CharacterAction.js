import {
    CHARACTER_LOADING, CHARACTER_DETAILS_DATA, CHARACTER_DETAIL_INITIAL_STATE,CHARACTER_DETAIL_DATA_ERROR
} from '../constants';
import JsonData from '../data/characters.json';

export const LoadCharacters = (page,start,offset) => {
  return (dispatch) => {
    dispatch({ type: CHARACTER_LOADING });
    const data = JsonData.splice(start, offset);
       if(data.length > 0) {
           dispatch({ type: CHARACTER_DETAILS_DATA,count:JsonData.length ,payload: data });
      }
      else {
        dispatch({ type: CHARACTER_DETAIL_DATA_ERROR, count:0,payload: 'error' });
      }
    };
};


export const initialCharacterData = () => {
  return {
    type: CHARACTER_DETAIL_INITIAL_STATE,
    payload: ''
  };
};
