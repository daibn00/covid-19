import * as actionType from '../constants/countries';


export const fetchCountries = ()=>{
  return{
    type : actionType.LOAD_DATA_COUNTRIES,
  }
}
export const fetchCountriesSuccess = (data)=>{
  return{
    type : actionType.LOAD_DATA_COUNTRIES_SUCCESS,
    payload : data
  }
}
export const fetchCountriesFailed = (error)=>{
  return{
    type : actionType.LOAD_DATA_COUNTRIES_FAILED,
    payload : error,
  }
}
export const filterData = (data)=>{
  return{
    type : actionType.FILTER_DATA_COUNTRIES_SEARCH,
    payload : data,
  }
}
