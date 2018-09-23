import * as types from './mutation-type'
import serverApi from '@/api/serverApi'

/*
用户登录
*/
export const userLogin = ({commit}, data) => {
    var serverConfig = {};
    serverConfig.urls = "http://localhost:3000/login";
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        commit(types.USER_TYPE,res.data.type);
        window.location.href="#/index";
      }else{
        commit(types.CHANGE_WRONG_MSG,true);
        commit(types.SET_WORNG_MSG,res.errmsg);
      }
    };
    serverConfig.errorcb = (error) => {
        commit(types.CHANGE_WRONG_MSG,true);
        commit(types.SET_WORNG_MSG,"登录失败，请稍后再试");
        console.log("登录失败");
    };
    serverApi.getHttpServer(serverConfig);
}
/*
报错信息是否展示
*/
export const changeShowWrongMsg = ({commit}, data) => {
    commit(types.CHANGE_WRONG_MSG,data);
}
/*
设置报错信息
*/
export const changeSetWrongMsg = ({commit}, data) => {
    commit(types.SET_WORNG_MSG,data);
}
  

