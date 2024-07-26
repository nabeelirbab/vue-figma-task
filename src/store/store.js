import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        query: '',
        results: [],
        loading: false,
        error: null,
        tags: ['Languages', 'Build', 'Design', 'Cloud'],

    },
    mutations: {
        SET_QUERY(state, query) {
            state.query = query;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_RESULTS(state, results) {
            state.results = results;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
    },
    actions: {
        async search({ commit }, query) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            commit('SET_RESULTS', []);
            commit('SET_QUERY', query);

            try {
                const response = await axios.get(`https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${query}`);
                commit('SET_RESULTS', response.data);

            } catch (err) {
                commit('SET_ERROR', 'Something went wrong. Please try again later.');
            } finally {
                commit('SET_LOADING', false);
            }
        }
    }
});
