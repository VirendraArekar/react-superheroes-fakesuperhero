import { HERO_APPEARANCE_INITIAL_STATE, HERO_APPEARANCE_DATA, HERO_APPEARANCE_DATA_ERROR, HERO_APPEARANCE_DATA_LOADING, BASE_URL } from '../constants';

const INTIAL_STATE = {
  appearance: {},
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_APPEARANCE_DATA_LOADING:
        return { ...state, appearance:{},success:true, message:"loading initial state."};
        case HERO_APPEARANCE_DATA:
        return { ...state, appearance: action.payload, success:true, message:"Hero appearance fetched successfully."};
       case HERO_APPEARANCE_DATA_ERROR:
        return { ...state, appearance: {}, success:false, message:"Fetching appearance  error."};
      case HERO_APPEARANCE_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};