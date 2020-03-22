import { takeEvery, put, delay  } from 'redux-saga/effects';


function*  testUpAsyn() {
    yield delay(4000);
    yield put({type:'TEST', value:20 })
}


export function* watchAgeUp() {

    yield takeEvery('TEST', testUpAsyn);
} 