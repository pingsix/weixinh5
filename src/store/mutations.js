import * as types from './types'

export default {
   //设置curUserId到
  [types.UPDATE_CURUSERID] (state, curUserId) {
   window.localStorage.setItem("curUserId",curUserId);
   state.curUserId = window.localStorage.getItem("curUserId");
  },
  [types.GET_CURUSERID] (state) {
   if (window.localStorage.getItem("curUserId")) {
     state.curUserId = window.localStorage.getItem("curUserId");
   }else{
     state.curUserId = '';
   }
  },
  [types.ADD_DATA1] (state, data1) {
    var index = parseInt(data1.recipeType)-1;
    state.diyRecipeData.dataList[index].recipeType = data1.recipeType;
    delete data1["recipeType"];
    var isExist = true;
    for(var i=0; i<state.diyRecipeData.dataList[index].data1.length; i++){
      if(JSON.stringify(state.diyRecipeData.dataList[index].data1[i]) == JSON.stringify(data1)){
         isExist = false;
      }
    }
    if(isExist){
      state.diyRecipeData.dataList[index].data1.push(data1);
    }
  },
  [types.ADD_DATA2] (state, data2) {
    var index = parseInt(data2.recipeType)-1;
    state.diyRecipeData.dataList[index].recipeType = data2.recipeType;
    delete data2["recipeType"];
    var isExist = true;
    for(var i=0; i<state.diyRecipeData.dataList[index].data2.length; i++){
      if(JSON.stringify(state.diyRecipeData.dataList[index].data2[i]) == JSON.stringify(data2)){
        isExist = false;
      }
    }
    if(isExist){
      state.diyRecipeData.dataList[index].data2.push(data2);
    }
  },
  [types.ADD_RECIPETYPE] (state, recipeType) {
    var index = parseInt(recipeType)-1;
    state.diyRecipeData.dataList[index].recipeType = recipeType;
  },
  [types.ADD_INFO] (state, info) {
    state.diyRecipeData['parentsNo'] = info.parentsNo;
    state.diyRecipeData['schoolNo'] = info.schoolNo;
    state.diyRecipeData['studentNo'] = info.studentNo;
    state.diyRecipeData['recipeDate'] = info.recipeDate;
  },
  [types.REMOVE_DATA1] (state, data1) {
    var index = parseInt(data1.recipeType)-1;
    var tempData1 = [];
    for(var i = 0 ; i< state.diyRecipeData.dataList[index].data1.length; i++){
      if(state.diyRecipeData.dataList[index].data1[i].dishesNo != data1.dishesNo){
        tempData1.push(state.diyRecipeData.dataList[index].data1[i]);
      }
    }
    state.diyRecipeData.dataList[index].data1 = tempData1;
  },
  [types.REMOVE_DATA2] (state, data2) {
    var index = parseInt(data2.recipeType)-1;
    var tempData2 = [];
    for(var i = 0 ; i< state.diyRecipeData.dataList[index].data2.length; i++){
      if(state.diyRecipeData.dataList[index].data2[i].ingredientsNo != data2.ingredientsNo){
        tempData2.push(state.diyRecipeData.dataList[index].data2[i]);
      }
    }
    state.diyRecipeData.dataList[index].data2 = tempData2;
  },
  [types.SET_DATA1_NUMBER] (state, data1) {
    var index = parseInt(data1.recipeType)-1;
    for(var i = 0 ; i< state.diyRecipeData.dataList[index].data1.length; i++){
      if(state.diyRecipeData.dataList[index].data1[i].dishesNo == data1.dishesNo){
        state.diyRecipeData.dataList[index].data1[i].number = data1.number;
      }
    }
  },
  [types.SET_DATA2_NUMBER] (state, data2) {
    var index = parseInt(data2.recipeType)-1;
    for(var i = 0 ; i< state.diyRecipeData.dataList[index].data2.length; i++){
      if(state.diyRecipeData.dataList[index].data2[i].ingredientsNo == data2.ingredientsNo){
        state.diyRecipeData.dataList[index].data2[i].number = data2.number;
      }
    }
  },
  [types.CLEAR_RECIPE_DATA] (state) {
    state.diyRecipeData = {'dataList':[{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]},{'recipeType':'','data1':[],'data2':[]}]}
  }
}
