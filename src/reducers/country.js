import * as actionType from '../constants/country';

const initialState = {
  data : {},
  error : '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_DATA_COUNTRY_SUCCESS:
      return{
        ...state,
        data : action.payload,
      }
      case actionType.LOAD_DATA_COUNTRY_FAILED:
      return{
        ...state,
        error : action.payload,
      }


    default:
      return {
       ...state
      }
  }
}

export default reducer;

