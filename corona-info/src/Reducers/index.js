import { combineReducers } from 'redux';
import countriesData from './CountriesData';

const rootReducers = combineReducers({
    countries:countriesData
});

export default rootReducers;