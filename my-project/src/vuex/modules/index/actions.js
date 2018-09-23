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

    commit(types.CUR_COURSE_ID,data.courseId);

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
export const addCourse = ({commit,dispatch}, data) => {
    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/addcourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getTreeData",0);
      }else{
      
      }
    };
    serverConfig.errorcb = (error) => {
       
    };
    serverApi.postHttpServer(serverConfig);
}
// 删除课程信息
export const delCourse = ({commit,dispatch}, data) => {
    var serverConfig = {};
    serverConfig.urls ="http://localhost:3000/delecourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getTreeData",0);
      }else{
       
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
// 修改课程信息
export const updCourse = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updcourse",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getTreeData",0);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}

//添加教师
export const addTeacher = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/addteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",1);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//删除教师
export const deleTeacher = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/deleteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",1);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//修改教师
export const updTeacher = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updteacher",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",1);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}



//添加学生
export const addStu = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/addstu",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",2);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//删除学生
export const deleStu = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/deletestu",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",2);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//修改学生
export const updStu = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updstu",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",2);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}



//添加成绩
export const addScore = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/addscore",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",3);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//删除成绩
export const deleScore = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/deletescore",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",3);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//修改成绩
export const updScore = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/updscore",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getSectionData",3);
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}


//添加题目
export const addQuestion = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/addquestion",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getCourseDetail",{courseId:data.courseId});
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}
//刪除题目
export const delQuestion = ({commit,dispatch}, data) => {
    var serverConfig = {};
    let me=this;
    serverConfig.urls ="http://localhost:3000/delquestion",
    serverConfig.params = data;
    serverConfig.successcb = (res) => {
      if(res.errcode == 0){
        dispatch("getCourseDetail",{courseId:data.courseId});
      }
    };
    serverConfig.errorcb = (error) => {
    };
    serverApi.postHttpServer(serverConfig);
}