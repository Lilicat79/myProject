import { queryMarket, changeMarket } from '@/services/Market';
const MarketModel = {
    namespace: 'Market',
    state: {
        marketData: [],
        total: 0,

    },
    effects: {
        *fetchLoadMarket(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(queryMarket, _.payload);
            yield put({
                type: 'changeData',
                payload: response,
            });
        },
        // changeMarket
        *fetchChangeMarket(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(changeMarket, _.payload.forms);
            // console.log(response)
            yield put({
                type: 'fetchLoadMarket',
                payload: _.payload.page,
            });
        },

    },

    // *fetchAddNews(_, { call, put }) {

    //     // console.log(_.payload.form)

    //     const response = yield call(queryNewsAdd, _.payload.forms);
    //     // console.log(response)
    //     yield put({
    //         type: 'fetchLoadNews',
    //         payload: _.payload.page,
    //     });
    // },
    reducers: {

        changeData(state, action) {
            // alert(1);
            console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                marketData: action.payload.data.list
            };
        },



    },
};
export default MarketModel;
