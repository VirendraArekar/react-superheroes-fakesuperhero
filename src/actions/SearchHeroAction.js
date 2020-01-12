import { HERO_SEARCH_INITIAL_STATE, HERO_SEARCH_DATA, HERO_SEARCH_DATA_ERROR, HERO_SEARCH_DATA_LOADING ,BASE_URL} from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const fetchHeroSearch = (keyword, page, start, offset) => {
  console.log(start);
    console.log(offset);
  return async (dispatch) => {
    dispatch({ type: HERO_SEARCH_DATA_LOADING });
    await axios.get(`${BASE_URL}/search/${keyword}`)
        .then(response => {
            console.log(Object.entries(response.data.results).slice(start,offset).map(entry => entry[1]));
          var data = Object.entries(response.data.results).slice(start,offset).map(entry => entry[1]);
          // Object.response.data(obj).slice(0,2).map(entry => entry[1]);
            // const data = JsonData.splice(start, offset);
           dispatch({ type: HERO_SEARCH_DATA, payload: data ,count:response.length,count:response.data.results.length});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: HERO_SEARCH_DATA_ERROR, payload: 'error',count:0 });
      })
    };
};


export const initialHeroSearch = () => {
  return {
    type: HERO_SEARCH_INITIAL_STATE,
    payload: ''
  };
};
