import * as types from './types'

export default {
  updateCurUserId({ commit }, curUserId) {
   commit(types.UPDATE_CURUSERID, curUserId)
  },
  getCurUserId({ commit }) {
   commit(types.GET_CURUSERID)
  },
  addData1({ commit }, data1) {
    commit(types.ADD_DATA1, data1)
  },
  addData2({ commit }, data2) {
    commit(types.ADD_DATA2, data2)
  },
  addRecipeType({ commit }, recipeType) {
    commit(types.ADD_RECIPETYPE, recipeType)
  },
  addInfo({ commit }, info) {
    commit(types.ADD_INFO, info)
  },
  removeData1({ commit }, data1) {
    commit(types.REMOVE_DATA1, data1)
  },
  removeData2({ commit }, data2) {
    commit(types.REMOVE_DATA2, data2)
  },
  setData1Number({ commit }, data1) {
    commit(types.SET_DATA1_NUMBER, data1)
  },
  setData2Number({ commit }, data2) {
    commit(types.SET_DATA2_NUMBER, data2)
  },
  clearRecipeData({ commit }) {
    commit(types.CLEAR_RECIPE_DATA)
  }
}

