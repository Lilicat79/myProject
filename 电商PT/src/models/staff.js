import { queryStaff, changeStates } from '@/services/staff';
const StaffModel = {
    namespace: 'staff',
    state: {
        staffData: [],
        total: 0,
        staffId: 0
    },
    effects: {
        *fetchLoadStaff(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(queryStaff, _.payload);
            // console.log(response)
            yield put({
                type: 'changeStaffData',
                payload: response,
            });
        },
        *fetchChangeState(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(changeStates, _.payload.form);
            yield put({
                type: 'fetchLoadStaff',
                payload: _.payload.page,
            });
        },
    },
    reducers: {

        changeStaffData(state, action) {
            // alert(1);
            // console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                staffData: action.payload.data.list
            };
        },



    },
};
export default StaffModel;
