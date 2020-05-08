import { all } from 'redux-saga/effects';
import country from './country';
import countries from './countries';
function* rootSaga() {
  yield  all([country,countries]);
}

export default rootSaga;
