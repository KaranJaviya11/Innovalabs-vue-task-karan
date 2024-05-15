
const state = {
    users: [],
    filteredUsers: [],
    currentPage: 1,
    itemsPerPage: 2,
    searchQuery: '',
    totalUsers: 0,
}

const getters = {
    paginatedUsers(state) {
        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        return state.filteredUsers.slice(startIndex, endIndex);
    },
    totalPages(state) {
        return Math.ceil(state.filteredUsers.length / state.itemsPerPage);
    },
    getCurrentPage(state) {
        return state.currentPage;
    },
    getSearchQuery(state) {
        return state.searchQuery;
    }
}

const mutations = {
    setUsers(state, users) {
        state.users = users;
        state.filteredUsers = users;
    },
    setCurrentPage(state, page) {
        state.currentPage = page;
    },
    setSearchQuery(state, query) {
        state.searchQuery = query;
    },
    filterUsers(state) {
        state.filteredUsers = state.users.filter(user => {
          return (
            user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
            user.username.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.phone.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.website.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.company.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.company.catchPhrase.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.company.bs.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.geo.lat.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.geo.lng.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.street.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.suite.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.city.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            user.address.zipcode.toLowerCase().includes(state.searchQuery.toLowerCase())
          );
        });
    },	
}

const actions = {
    async fetchUsers({ commit }) {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          commit('setUsers', data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    },

    setCurrentPage0 ({commit}) {
        commit('setCurrentPage', 1);
    }
  }




export default {
    namespaced: true,
    state : state,
    getters: getters,
    mutations: mutations,
    actions: actions
}