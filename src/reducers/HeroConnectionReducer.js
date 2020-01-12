import { HERO_CONNECTION_INITIAL_STATE, HERO_CONNECTION_DATA, HERO_CONNECTION_DATA_ERROR, HERO_CONNECTION_DATA_LOADING } from '../constants';

const INTIAL_STATE = {
  connection: {},
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_CONNECTION_DATA_LOADING:
        return { ...state, connection:{},success:true, message:"loading initial state."};
        case HERO_CONNECTION_DATA:
        return { ...state, connection: action.payload, success:true, message:"Hero connection fetched successfully."};
       case HERO_CONNECTION_DATA_ERROR:
        return { ...state, connection: {}, success:false, message:"Fetching connection  error."};
      case HERO_CONNECTION_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};