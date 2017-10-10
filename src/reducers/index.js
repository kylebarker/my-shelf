import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import artists from './artists';

const rootReducer = combineReducers({
    form: formReducer,
    artists
});
export default rootReducer;
