import { HERO_INITIAL_STATE, HERO_DATA, HERO_DATA_ERROR, HERO_DATA_LOADING } from '../constants';

const INTIAL_STATE = {
  detail: [],
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    switch (action.type) {
      case HERO_DATA_LOADING:
        return { ...state, detail:[] ,success:true, message:"loading initial state."};
      case HERO_DATA:
        return { ...state, detail: action.payload, success:true, message:"Hero detail fetched successfully."};
       case HERO_DATA_ERROR:
        return { ...state, detail: [], success:false, message:"Fetching hero detail error."};
      case HERO_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};


