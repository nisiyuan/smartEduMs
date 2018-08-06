import * as types from './mutation-type'

const mutations = {
    //展示错误信息
    [types.CHANGE_WRONG_MSG](state,data){
        state.showWrongMsg = data;
    },
    //设置用户信息
    [types.SET_USEER_INFO](state,data){
        state.userInfo = data;
    },
    //设置错误信息
    [types.SET_WORNG_MSG](state,data){
        state.showErr= 1;
        state.wrongMsg = data;
    },
    //设置错误信息
    [types.USER_TYPE](state,data){
        state.userType=data;
    }


    
}

export default mutations