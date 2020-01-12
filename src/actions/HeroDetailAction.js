import { HERO_INITIAL_STATE, HERO_DATA, HERO_DATA_ERROR, HERO_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: HERO_DATA_LOADING });
    await axios.get(`${BASE_URL}${id}`)
      .then(response => {
        // console.log(response.data);
           dispatch({ type: HERO_DATA, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_DATA_ERROR, payload: 'error' });
      })
    };
};


export const initialHeroDetail = () => {
  return {
    type: HERO_INITIAL_STATE,
    payload: ''
  };
};
