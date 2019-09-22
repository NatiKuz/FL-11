export const LOAD_MORE = 'LOAD_MORE';
export const REMOVE_USER = 'REMOVE_USER';
export const SEARCH = 'SEARCH';

/**
 * load more data
 * @param  {Number} rowsView - How many rows need show on the table
 */
export const loadMore = (rowsView) => {
    return {
        type: LOAD_MORE,
        rowsView
    };
};

/**
 * remove user
 * @param  {Array} users - Users without removed
 */
export const removeUser = (users) => {
    return {
        type: REMOVE_USER,
        users,
        count: users.length
    };
};

/**
 * search
 * @param  {string} search - Users without removed
 */
export const setSearch = (search) => {
    return {
        type: SEARCH,
        search
    };
};
