import { queryLogs } from '@/services/logs';
const LogsModel = {
    namespace: 'logs',
    state: {
        LogsData: [],
        total: 0
    },
    effects: {
        *fetchLoadLogs(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(queryLogs, _.payload);
            console.log(response)
            yield put({
                type: 'changeLogsData',
                payload: response,
            });
        },
    },
    reducers: {

        changeLogsData(state, action) {
            // alert(1);
            console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                LogsData: action.payload.data.list
            };
        },

    },
};
export default LogsModel;
