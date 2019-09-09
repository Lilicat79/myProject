import { queryNews, queryNewsStatus, queryNewsDele, queryNewsAdd } from '@/services/news';
const NewsModel = {
    namespace: 'news',
    state: {
        NewsData: [],
        total: 0
    },
    effects: {
        *fetchLoadNews(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(queryNews, _.payload);
            // console.log(response)
            yield put({
                type: 'changeNewsData',
                payload: response,
            });
        },
        //修改用户状态
        *fetchChangeNewsState(_, { call, put }) {

            console.log(_.payload.form)

            const response = yield call(queryNewsStatus, _.payload.form);
            // console.log(response)
            yield put({
                type: 'fetchLoadNews',
                payload: _.payload.page,
            });
        },
        *fetchAddNews(_, { call, put }) {

            // console.log(_.payload.form)

            const response = yield call(queryNewsAdd, _.payload.forms);
            console.log(response)
            yield put({
                type: 'fetchLoadNews',
                payload: _.payload.page,
            });
        },

        *fetchDeleNews(_, { call, put }) {

            // console.log(_.payload.form)

            const response = yield call(queryNewsDele, _.payload.form);
            // console.log(response)
            yield put({
                type: 'fetchLoadNews',
                payload: _.payload.page,
            });
        },
    },
    reducers: {

        changeNewsData(state, action) {
            // alert(1);
            // console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                NewsData: action.payload.data.list
            };
        },

    },
};
export default NewsModel;
