import { HERO_SEARCH_INITIAL_STATE, HERO_SEARCH_DATA, HERO_SEARCH_DATA_ERROR, HERO_SEARCH_DATA_LOADING } from '../constants';

const INTIAL_STATE = {
  search: {},
  success: true,
  message: "initial load data",
  count :0
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    switch (action.type) {
      case HERO_SEARCH_DATA_LOADING:
        return { ...state, search:{},success:true, message:"loading initial state.",count:0};
        case HERO_SEARCH_DATA:
        return { ...state, search: action.payload, success:true, message:"Hero search fetched successfully.",count:action.count};
       case HERO_SEARCH_DATA_ERROR:
        return { ...state, search: {}, success:false, message:"Fetching search  error.",count:0};
      case HERO_SEARCH_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};


