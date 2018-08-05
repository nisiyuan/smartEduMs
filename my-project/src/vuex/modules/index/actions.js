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
