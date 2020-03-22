import { takeEvery, put, all,take  } from 'redux-saga/effects';
import cheerio from 'cheerio';
import * as apiServices from '../Helpers/axiosHelper';

function*  getCountriesDataAsync() {
    const data = yield fetch( "https://corona.lmao.ninja/countries")
    .then(res => res.json(), );
    yield put({type:'DATA_COMPLETED', value:data });
}

function*  getInidaHighLevelAsync() {
    const data = yield fetch( "https://corona.lmao.ninja/countries/india")
    .then(res => res.json(), );
    yield put({type:'INDIA_DATA_COMPLETED', value:data });
}

function* sendDataToReducers(returnData) {
    
}

function*  getInidaDataAsync() {
    const data = yield take("https://www.mohfw.gov.in/")
            yield put({type:'INDIA_STATE_DATA_COMPLETED', value:data });
}






export function* watchCountrieData() {

    yield takeEvery('GET_COUNTRIES_DATA', getCountriesDataAsync);

    yield takeEvery('GET_INDIA_HUGH_LEVEL_DATA', getInidaHighLevelAsync);

    yield takeEvery('GET_INDIA_DATA', getInidaDataAsync);
} 

export function* rootSaga() {
    yield all([
        watchCountrieData(),
    ]);
 }