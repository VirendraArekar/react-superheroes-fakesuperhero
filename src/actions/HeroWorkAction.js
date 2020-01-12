import { HERO_WORK_INITIAL_STATE, HERO_WORK_DATA, HERO_WORK_DATA_ERROR, HERO_WORK_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroWork = (id) => {
  return async (dispatch) => {
    dispatch({ type: HERO_WORK_DATA_LOADING });
    await axios.get(`${BASE_URL}${id}/work`)
        .then(response => {
            // console.log(response.data.url);
        // console.log(response.data);
           dispatch({ type: HERO_WORK_DATA, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_WORK_DATA_ERROR, payload: 'error' });
      })
    };
};


export const initialHeroWork = () => {
  return {
    type: HERO_WORK_INITIAL_STATE,
    payload: ''
  };
};
