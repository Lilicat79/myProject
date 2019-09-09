import { queryBusiness } from '@/services/BusinessManege';
const BusinessModel = {
    namespace: 'Business',
    state: {
        buinessData: [],
        total: 0,

    },
    effects: {
        *fetchLoadBufindess(_, { call, put }) {

            console.log(_.payload)
            const response = yield call(queryBusiness, _.payload);
            yield put({
                type: 'changeBusinessData',
                payload: response,
            });
        },

    },
    reducers: {

        changeBusinessData(state, action) {
            // alert(1);
            // console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                buinessData: action.payload.data.list
            };
        },



    },
};
export default BusinessModel;
