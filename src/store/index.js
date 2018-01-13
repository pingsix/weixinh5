import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'

const state = {
  curUserId: '',
  diyRecipeData: {'dataList':[{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]}]}
};

export default new Vuex.Store({
  mutations,
	state,
	actions
});
