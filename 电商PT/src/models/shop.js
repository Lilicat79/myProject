// queryShop
import { queryShop } from '@/services/shop';
const ShopModel = {
    namespace: 'shop',
    state: {
        ShopData: [],
        total: 0
    },
    effects: {
        *fetchLoadShop(_, { call, put }) {

            // console.log(_.payload)
            const response = yield call(queryShop, _.payload);
            // console.log(response)
            yield put({
                type: 'changeShopData',
                payload: response,
            });
        },
    },
    reducers: {

        changeShopData(state, action) {
            // alert(1);
            // console.log(action.payload)
            return {
                ...state,
                total: action.payload.data.total,
                ShopData: action.payload.data.list
            };
        },



    },
};
export default ShopModel;
