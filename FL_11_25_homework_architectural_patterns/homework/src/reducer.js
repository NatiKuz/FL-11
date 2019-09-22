import data from './data';
import {
    REMOVE_USER,
    LOAD_MORE,
    SEARCH
} from './actions';

const rowsViewMin = 5;

const initialState = {
    rowsViewMin,
    rowsView: rowsViewMin,
    search: '',
    users: data,
    count: data.length
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOAD_MORE:
        return Object.assign({}, state, {
            rowsView: action.rowsView,
        });
    case REMOVE_USER:
        return Object.assign({}, state, {
            users: action.users,
            count: action.count
        });
    case SEARCH:
        return Object.assign({}, state, {
            search: action.search
        });
    default:
        return state;
    }
};

export default reducer;