/**
 * Created by baijing on 2016/12/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login
    },
    strict: false
})