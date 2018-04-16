import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    // 是否进入主页面
    isIntoHome:true,
}

export default new Vuex.Store({
    state
});