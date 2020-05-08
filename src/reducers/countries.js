import * as actionType from '../constants/countries';
import {toast} from 'react-toastify';
import { string } from 'postcss-selector-parser';
const initialState = {
  data : [],
  error : '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_DATA_COUNTRIES_FAILED:
        toast.error("LOAD_DATA_COUNTRIES_FAILED !");
        return{
          ...state,
          error : action.payload,
        }
    case actionType.LOAD_DATA_COUNTRIES_SUCCESS:
      toast.success("LOAD_DATA_COUNTRIES_SUCCESS !");
      return{
        ...state,
        data : action.payload,
      }
      case actionType.FILTER_DATA_COUNTRIES_SEARCH :
      toast.success("FILTER_DATA_COUNTRIES_SEARCH !");
      const data = state.data.find(x => x.title.toLowerCase() === action.payload.toLowerCase());
      console.log(data)
      return {
        ...state,
        data : [data]

      }

    default:
      return {
       ...state
      }
  }
}

export default reducer;
