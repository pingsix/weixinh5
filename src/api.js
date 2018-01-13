import Vue from 'vue'
import axios from 'axios'
import store from './store/index.js'
import Vuex from 'vuex'


//var API_ROOT = process.env.NODE_ENV === 'production' ? (window.document.location.protocol + '//' + window.document.location.host + '/email') : '/api';
var API_ROOT = process.env.NODE_ENV === 'production' ? 'http://alarm.juncai360.cn' : '/api';

//axios.interceptors.request.use(
//  config => {
//    //全局追加curUserId
//    store.dispatch('getCurUserId');
//    config.params = (
//      Object.assign((config.params ? config.params : {}),{"curUserId":store.state.curUserId})
//    );
//    return config;
//  },
//  err => {
//    return Promise.reject(err);
//  }
//);
export default {
  get(url, options) {
    return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(API_ROOT + url, options).then((response) => {
        resolve(response.data)
      }).catch(function(error){
          reject(error);
        })
    });
  },

  post(url, options) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.post(API_ROOT + url, options).then((response) => {
        resolve(response.data);
      }).catch(function(error){
        reject(error);
      })

    });
  }
}

