import * as types from './mutation-type'

const mutations = {
    //树的展开收起
    [types.CHANGE_TREE_STATUS](state,data){
        state.opened = !state.opened;
    },
    //切换内容展示区域
    [types.CHANGE_CONTENT_SECTION](state,data){
        state.section =data;
    },
    //切换内容展示区域
    [types.GET_SECTION_DATA](state,data){
        state.contentList =data;
    },
    //课程目录树
    [types.GET_TREE_DATA](state,data){
        state.treeList =data;
    },
    //课程信息
    [types.GET_QUESTION_DATA](state,data){
        console.log(data)
        state.questionList =data;
    }


   
}

export default mutations