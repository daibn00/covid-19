import * as actionType from '../constants/country';


export const fetchCountry = (code)=>{
  return{
    type : actionType.LOAD_DATA_COUNTRY,
    payload : code
  }
}
export const fetchCountrySuccess = (data)=>{
  return{
    type : actionType.LOAD_DATA_COUNTRY_SUCCESS,
    payload : data
  }
}
export const fetchCountryFaild = (error)=>{
  return{
    type : actionType.LOAD_DATA_COUNTRY_FAILED,
    payload : error,
  }
}
