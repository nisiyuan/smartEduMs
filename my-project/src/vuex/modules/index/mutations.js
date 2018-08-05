import * as types from './mutation-type'

const mutations = {
    //树的展开收起
    [types.CHANGE_TREE_STATUS](state,data){
        state.opened = !state.opened;
    },
    //切换内容展示区域
    [types.CHANGE_CONTENT_SECTION](state,data){
        state.section =data;
    }
}

export default mutations