import { BASE_URL } from '../constants';
import axios from 'axios';
axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function fetchImage(id) {
    // console.log(id);
     axios.get(`${BASE_URL}${id}/image`)
        .then(response => {
            // console.log(response.data.url);
            return response.data.url;
      })
      .catch(err => {
          return null;
      })
};
