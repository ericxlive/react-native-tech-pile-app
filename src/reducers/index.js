import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'; // Adding the reducer.
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer, 
    selectedLibraryId: SelectionReducer
});
