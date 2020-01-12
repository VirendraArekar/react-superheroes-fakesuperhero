import { HERO_BIOGRAPHY_INITIAL_STATE, HERO_BIOGRAPHY_DATA, HERO_BIOGRAPHY_DATA_ERROR, HERO_BIOGRAPHY_DATA_LOADING } from '../constants';

const INTIAL_STATE = {
  biography: null,
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_BIOGRAPHY_DATA_LOADING:
        return { ...state, biography:{},success:true, message:"loading initial state."};
        case HERO_BIOGRAPHY_DATA:
        return { ...state, biography: action.payload, success:true, message:"Hero image biography successfully."};
       case HERO_BIOGRAPHY_DATA_ERROR:
        return { ...state, biography: {}, success:false, message:"Fetching biography  error."};
      case HERO_BIOGRAPHY_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};