import { combineReducers } from 'redux';
import countriesData from './CountriesData';
import PDFLinks from './PDFData';

const rootReducers = combineReducers({
    countries:countriesData,
    PDFLinks:PDFLinks
});

export default rootReducers;