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
      
      }
    };
    serverConfig.errorcb = (error) => {
     
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
     
      }
    };
    serverConfig.errorcb = (error) => {
      
    };
    serverApi.getHttpServer(serverConfig);
}

// 获取课程信息
export const getCourseDetail = ({commit}, data) => {

    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/coursedetail",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        commit(types.GET_QUESTION_DATA,res.list)
      }else{
        
      }
    };
    serverConfig.errorcb = (error) => {
    
    };
    serverApi.getHttpServer(serverConfig);
}


// 添加课程信息
export const addCourse = ({commit}, data) => {
    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/addcourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        // commit(types.GET_QUESTION_DATA,res.list)
      }else{
      
      }
    };
    serverConfig.errorcb = (error) => {
       
    };
    serverApi.postHttpServer(serverConfig);
}
// 删除课程信息
export const delCourse = ({commit}, data) => {
    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/delecourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        // commit(types.GET_QUESTION_DATA,res.list)
      }else{
       
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
// 修改课程信息
export const updCourse = ({commit}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updcourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}

//添加教师
export const addTeacher = ({commit}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/addteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//删除教师
export const deleTeacher = ({commit}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/deleteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//修改教师
export const updTeacher = ({commit}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
