import { HERO_CONNECTION_INITIAL_STATE, HERO_CONNECTION_DATA, HERO_CONNECTION_DATA_ERROR, HERO_CONNECTION_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroConnection = (id) => {
  return async (dispatch) => {
    dispatch({ type: HERO_CONNECTION_DATA_LOADING });
    await axios.get(`${BASE_URL}${id}/connections`)
        .then(response => {
            // console.log(response.data.url);
        // console.log(response.data);
           dispatch({ type: HERO_CONNECTION_DATA, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_CONNECTION_DATA_ERROR, payload: 'error' });
      })
    };
};


export const initialHeroConnection = () => {
  return {
    type: HERO_CONNECTION_INITIAL_STATE,
    payload: ''
  };
};
