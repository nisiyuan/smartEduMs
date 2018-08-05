import * as types from './mutation-type'
import serverApi from '@/api/serverApi'

/*
树的展开收起
*/
export const changeTreeStatus = ({commit}, data) => {
    commit("CHANGE_TREE_STATUS",data);
}
  
/*
内容展示区域切换
*/
export const changeContetSection = ({commit}, data) => {
    commit("CHANGE_CONTENT_SECTION",data);
}

const urls=[
    "http://localhost:3000/courseinfo",
    "http://localhost:3000/teacherinfo",
    "http://localhost:3000/stuinfo",
    "http://localhost:3000/scoreinfo"
];
/*
内容数据获取
*/
export const getSectionData = ({commit}, data) => {

    var serverConfig = {};
    serverConfig.urls =urls[data];
    // serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        commit(types.GET_SECTION_DATA,res.list)
      }else{
        // commit(types.CHANGE_WRONG_MSG,true);
        // commit(types.SET_WORNG_MSG,res.errmsg);
      }
    };
    serverConfig.errorcb = (error) => {
        // commit(types.CHANGE_WRONG_MSG,true);
        // commit(types.SET_WORNG_MSG,"登录失败，请稍后再试");
        // console.log("登录失败");
    };
    serverApi.getHttpServer(serverConfig);
}
/*
课程目录数据
*/
export const getTreeData = ({commit}, data) => {

    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/treeinfo",
    // serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        commit(types.GET_TREE_DATA,res.list)
      }else{
        // commit(types.CHANGE_WRONG_MSG,true);
        // commit(types.SET_WORNG_MSG,res.errmsg);
      }
    };
    serverConfig.errorcb = (error) => {
        // commit(types.CHANGE_WRONG_MSG,true);
        // commit(types.SET_WORNG_MSG,"登录失败，请稍后再试");
        // console.log("登录失败");
    };
    serverApi.getHttpServer(serverConfig);
}