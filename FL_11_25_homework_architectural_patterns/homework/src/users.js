import * as actions from './actions';

class Users {
    constructor(options) {
        this.store = options.store;
    }

    loadMore() {
        const state = this.store.getState();
        const rowsView = state.rowsView + state.rowsViewMin;
        const count = state.count;
        this.store.dispatch(actions.loadMore(rowsView < count ? rowsView: count));
    }

    removeUser(id) {
        const state = this.store.getState();
        this.store.dispatch(actions.removeUser(state.users.filter((user) => parseInt(user.id, 10) !== id)));
    }

    viewUsers() {
        const state = this.store.getState();
        let users = state.users;
        const search = state.search;
        if (search) {
            users = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
        }

        return users.slice(0, state.rowsView);
    }

    doSearch(search) {
        this.store.dispatch(actions.setSearch(search));
    }
}

export default Users;