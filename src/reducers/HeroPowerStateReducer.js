import { HERO_POWER_INITIAL_STATE, HERO_POWER_DATA, HERO_POWER_DATA_ERROR, HERO_POWER_DATA_LOADING, BASE_URL } from '../constants';

const INTIAL_STATE = {
  power: {},
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_POWER_DATA_LOADING:
        return { ...state, power:{},success:true, message:"loading initial state."};
        case HERO_POWER_DATA:
        return { ...state, power: action.payload, success:true, message:"Hero power fetched successfully."};
       case HERO_POWER_DATA_ERROR:
        return { ...state, power: {}, success:false, message:"Fetching power  error."};
      case HERO_POWER_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};


