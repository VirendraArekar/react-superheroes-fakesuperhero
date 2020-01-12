import { HERO_WORK_INITIAL_STATE, HERO_WORK_DATA, HERO_WORK_DATA_ERROR, HERO_WORK_DATA_LOADING} from '../constants';

const INTIAL_STATE = {
  work: null,
  success: true,
  message: "initial load data"
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    
    switch (action.type) {
      case HERO_WORK_DATA_LOADING:
        return { ...state, work:{},success:true, message:"loading initial state."};
        case HERO_WORK_DATA:
        return { ...state, work: action.payload, success:true, message:"Hero work fetched successfully."};
       case HERO_WORK_DATA_ERROR:
        return { ...state, work: {}, success:false, message:"Fetching work  error."};
      case HERO_WORK_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};