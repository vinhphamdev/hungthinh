import { SugarBaby2 } from '../../constant/constant';
export default {
    state: {
        information: '',
        policy: '',
        revenue: '',
        proposer: '',
        stats: '',
        projectName: '',
        media: [],
        platform: [],
        description: '',


        //
        dataCampaign: {}
    },
    getters: {

    },
    mutations: {
        updateInfor(state, payload) {
            state.information = payload.information;
            state.policy = payload.policy;
            state.revenue = payload.revenue;
            state.proposer = payload.proposer;
            state.stats = payload.stats;
            state.projectName = payload.title;
            state.media = payload.medias;
            state.platform = payload.project_breakdown;
            state.description = payload.description;
        },
        setDataCampaignByName(state, campaignName) {
            switch (campaignName) {
     
                case 'sb2':
                    state.dataCampaign = SugarBaby2;
                    break;


                default:
                    break;
            }
        }
    },
    actions: {
        setInfor({ commit }, payload) {
            commit('updateInfor', payload);
        }
    }
}
