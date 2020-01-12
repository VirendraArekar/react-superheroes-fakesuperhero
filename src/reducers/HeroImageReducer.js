import { HERO_IMAGE_INITIAL_STATE, HERO_IMAGE_DATA, HERO_IMAGE_DATA_ERROR, HERO_IMAGE_DATA_LOADING, BASE_URL } from '../constants';

const INTIAL_STATE = {
  image: null,
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_IMAGE_DATA_LOADING:
        return { ...state, image:null,success:true, message:"loading initial state."};
        case HERO_IMAGE_DATA:
        return { ...state, image: action.payload.url, success:true, message:"Hero image fetched successfully."};
       case HERO_IMAGE_DATA_ERROR:
        return { ...state, image: null, success:false, message:"Fetching image  error."};
      case HERO_IMAGE_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};


