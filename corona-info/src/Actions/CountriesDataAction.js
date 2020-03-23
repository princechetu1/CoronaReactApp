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

export function fetchHTML(userId) {
    return apiServices.getRequest('https://www.mohfw.gov.in/');
  };

  const isPdfLink = (link) => {
    return link.slice(link.length - 4) === '.pdf' || link.slice(link.length - 3) === '.PDF'
}

function*  getInidaDataAsync() {
    const html = yield call(fetchHTML, "");
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
    });

    yield put({type:'INDIA_STATE_DATA_COMPLETED', value:returnData });
}


function* getHTMLContent() {
    const html = yield call(fetchHTML, "");
    const $ = cheerio.load(html.data)
    const returnData = [];
    let allMenuLinks = [];
    let newDocumentPdfLinks = [];

        $('.menu .menu-ee .dropdown').each((_, button) => {
            allMenuLinks.push($(button).find('.dropbtn a').attr('href'))
        });

        for(let page of allMenuLinks) {
            const allPdfLinksOnPage = yield call(getAllPdfLinksFromPage, page);
            
            newDocumentPdfLinks.push(...allPdfLinksOnPage)
        }

        yield put({type:'PDF_FETCH_COMPLETED', value:newDocumentPdfLinks });
}

export function* getAllPdfLinksFromPage(page) {
    try {
        const html = yield call(fetchHTML , page);

        const $ = cheerio.load(html.data)

        let allPdfLinksOnPage = [];

        $('a').each((_ ,link) => {
            const linkAttr = $(link).attr('href')
            if(isPdfLink(linkAttr)) {
                const linkTitle = $(link).text().trim()

                allPdfLinksOnPage.push({
                    link: linkAttr,
                    title: linkTitle
                })
            }
        })

        return allPdfLinksOnPage

    } catch(e) {
        console.log("error getting links from the page: ", page)
        console.log(e)
        return []
    }
}







export function* watchCountrieData() {

    yield takeEvery('GET_COUNTRIES_DATA', getCountriesDataAsync);

    yield takeEvery('GET_INDIA_HUGH_LEVEL_DATA', getInidaHighLevelAsync);

    yield takeEvery('GET_INDIA_DATA', getInidaDataAsync);
    yield takeEvery('GET_ALL_PDF', getHTMLContent);
   

} 

export function* rootSaga() {
    yield all([
        watchCountrieData()
    ]);
 }