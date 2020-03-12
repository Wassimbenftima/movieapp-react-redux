import {createStore} from "redux" ;
import  movieReducer from '../reducers/movieReducer';
const reduxdevTools = window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(movieReducer, reduxdevTools);

export default store;