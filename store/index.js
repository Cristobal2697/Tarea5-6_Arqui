import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
    animals: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    animal: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    prevNext: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    readMore: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    }
});
/* All states mutations */
const mutations = {
    GET_ANIMALS(state, payload) {
        state.animals.data = payload
        state.animals.status = STATUS_TYPES.SUCCESS
    },
    GET_ANIMAL(state, payload) {
        state.animal.data = payload
        state.animal.status = STATUS_TYPES.SUCCESS
    },
    GET_READ_MORE(state, payload) {
        state.readMore.data = payload
        state.readMore.status = STATUS_TYPES.SUCCESS
    },
    GET_PREV_NEXT(state, payload) {
        state.prevNext.data = payload
        state.prevNext.status = STATUS_TYPES.SUCCESS
    }
};
/* All states getters */
const getters = {
    getAnimals: (state) => parsesJSON(state.animals),
    getAnimal: (state) => parsesJSON(state.animal),
    getPrevNext: (state) => parsesJSON(state.prevNext),
    getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
    async getAnimals({ commit }, params, callback) {
        const storeAnimals = await this.$content('zoo')
            .fetch()
        commit('GET_ANIMALS', storeAnimals)
    },
    async getAnimal({ commit }, params, callback) {
        const storeAnimal = await this.$content('zoo', params.slug).fetch()
        commit('GET_ANIMAL', storeAnimal)
    },
    async getPrevNext({ commit }, params, callback) {
        const [prev, next] = await this.$content('zoo')
            .surround(params.slug)
            .fetch()
        commit('GET_PREV_NEXT', { prev, next })
    },
    async getReadMore({ commit }, params, callback) {
        const storeReadMore = await this.$content('zoo')
            .where({
                slug: { $ne: params.slug },
            })
            .limit(3)
            .fetch()
        commit('GET_READ_MORE', storeReadMore)
    }
};
/* Export all stores */
export default {
    state,
    mutations,
    getters,
    actions
}