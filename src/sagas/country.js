import { put , call ,takeLatest, all } from 'redux-saga/effects';
import api from '../api/api';
import {toast} from 'react-toastify';
import { fetchCountrySuccess ,fetchCountryFaild } from '../action/country';
function* loadContry( { payload  : code } ){
  try {
    const  {data}  = yield call(api.get, `/free-api?countryTotal=${code}`);
    yield put(fetchCountrySuccess(data.countrydata[0]));
    toast.success("DONE !");


  } catch (error) {
    yield put(fetchCountryFaild(error));
    toast.error("ERROR !")

  }
}

export default all([
  takeLatest('LOAD_DATA_COUNTRY',loadContry),
]);
