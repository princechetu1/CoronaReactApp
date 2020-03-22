import testValues from './testReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    testValues: testValues,
});

export default rootReducers;