import { put , call ,takeLatest, all } from 'redux-saga/effects';
import api from '../api/api';
import {toast} from 'react-toastify';
import { fetchCountriesSuccess ,fetchCountriesFailed } from '../action/countries';
function* loadContry({ code }){
  try {
    const { data : response } = yield call(api.get, `/free-api?countryTotals=ALL`);


    const convertToArray = Object.values(response.countryitems[0]);
    const sortArray = convertToArray.sort((a,b) => b.total_cases - a.total_cases);
    yield put(fetchCountriesSuccess(sortArray))

    toast.success("DONE !");

  } catch (error) {
    yield put(fetchCountriesFailed(error));
    toast.error("ERROR !")

  }
}

export default all([
  takeLatest('LOAD_DATA_COUNTRIES',loadContry),
]);
