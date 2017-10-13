import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import artists from './artists';
import search from './search';
const rootReducer = combineReducers({
    form: formReducer,
    search,
    artists,
  
});
export default rootReducer;
