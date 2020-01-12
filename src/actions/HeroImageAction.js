import { HERO_IMAGE_INITIAL_STATE, HERO_IMAGE_DATA, HERO_IMAGE_DATA_ERROR, HERO_IMAGE_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroImage = (id) => {
  return async (dispatch) => {
    dispatch({ type: HERO_IMAGE_DATA_LOADING });
    await axios.get(`${BASE_URL}${id}/image`)
        .then(response => {
            // console.log(response.data.url);
        // console.log(response.data);
           dispatch({ type: HERO_IMAGE_DATA, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_IMAGE_DATA_ERROR, payload: 'error' });
      })
    };
};


export const initialHeroImage = () => {
  return {
    type: HERO_IMAGE_INITIAL_STATE,
    payload: ''
  };
};
