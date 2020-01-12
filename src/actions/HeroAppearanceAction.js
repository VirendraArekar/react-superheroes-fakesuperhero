import { HERO_APPEARANCE_INITIAL_STATE, HERO_APPEARANCE_DATA, HERO_APPEARANCE_DATA_ERROR, HERO_APPEARANCE_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroAppearance = (id) => {
  return async (dispatch) => {
    dispatch({ type: HERO_APPEARANCE_DATA_LOADING });
    await axios.get(`${BASE_URL}${id}/appearance`)
        .then(response => {
            // console.log(response.data.url);
        // console.log(response.data);
           dispatch({ type: HERO_APPEARANCE_DATA, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_APPEARANCE_DATA_ERROR, payload: 'error' });
      })
    };
};


export const initialHeroAppearance = () => {
  return {
    type: HERO_APPEARANCE_INITIAL_STATE,
    payload: ''
  };
};
