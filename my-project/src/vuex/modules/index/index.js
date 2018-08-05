import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  section:0,      //内容区 默认0   课程列表 1教师 2 学员 3 成绩
  opened:false    //树是否展开

}

export default{
  state,
  actions,
  getters,
  mutations
}
