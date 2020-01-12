import {
    CHARACTER_LOADING, CHARACTER_DETAILS_DATA, CHARACTER_DETAIL_INITIAL_STATE,CHARACTER_DETAIL_DATA_ERROR
} from '../constants';


const INTIAL_STATE = {
  characters: [],
  success: true,
  message: "initial load data",
  count:0
};

export default (state = INTIAL_STATE, action) => {
  // const responce = action.payload;
    switch (action.type) {
      case CHARACTER_LOADING:
        return { ...state, characters:[] ,success:true, message:"loading initial state.",count : 0};
      case CHARACTER_DETAILS_DATA:
        return { ...state, characters: action.payload, success:true, message:"All characters are fetched",count:action.count};
       case CHARACTER_DETAIL_DATA_ERROR:
        return { ...state, characters: [], success:false, message:"Fetching character data error.",count:0};
      case CHARACTER_DETAIL_INITIAL_STATE:
          return INTIAL_STATE;
      default:
        return state;
    }
};

