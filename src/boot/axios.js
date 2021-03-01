import api from '../api'

export default async ({ Vue, store }) => {
    Vue.prototype.$api = api
};
