import { takeEvery, put, all,call  } from 'redux-saga/effects';
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

export function fetchUser(userId) {
    return apiServices.getRequest('https://www.mohfw.gov.in/');
  };
function*  getInidaDataAsync() {
    const html = yield call(fetchUser, "");
    const $ = cheerio.load(html.data)
    const returnData = [];
    const tableBody = $('div.content div.table-responsive table tbody')
    
    tableBody.children().each((_, element) => {
        const perStateData = []
        const rows = $(element).find('td')

        if(rows.length === 5) {
            perStateData.push("Total number of confirmed cases in India")
        }
        rows.each((i, row) => {
            if(i !== 0) {
                perStateData.push($(row).text().trim())
            } 
        })
        var obj = {
            'State_Name':perStateData[0],
            'Total_Confirmed_cases_Indian_National':perStateData[1],
            'Total_Confirmed_cases_Foreign_National':perStateData[2],
            'Cured_Discharged_Migrated':perStateData[3],
            'Death':perStateData[4]
        }

        returnData.push(obj);
    })
    yield put({type:'INDIA_STATE_DATA_COMPLETED', value:returnData });
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