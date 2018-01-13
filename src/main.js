// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import API from './api.js'
import store from './store/index.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'jquery-weui/dist/lib/jquery-2.1.4.js'
import 'jquery-weui/dist/js/jquery-weui.min.js'
import 'jquery-weui/dist/css/jquery-weui.min.css'
import 'jquery-weui/dist/lib/weui.min.css'
import 'jquery-weui/dist/js/swiper.min.js'
import 'jquery-weui/dist/lib/fastclick.js'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'; //引入中文包，提示信息可以以中文形式显示
import VueI18n from 'vue-i18n';
import {Validator} from 'vee-validate';
//创建规则
const isMobile = {
    getMessage:function(field, args) {
      return field + '请填写正确的邮箱'
    },
    validate: (value, args) => {
    //console.log(value)
//return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
return /^(([a-z0-9_\.-]+)@(beadwallet.com\,))*([a-z0-9_\.-]+)@beadwallet.com$/.test(value)
}
}
Vue.use(ElementUI)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});
Vue.config.productionTip = false

Vue.config.productionTip = false
Validator.extend('walletMail', isMobile);
//关于axios配置
axios.interceptors.request.use(function(config) {     //发送请求
  //stores.dispatch('showLoading')
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {    //请求回来
  //stores.dispatch('hideLoading')
  return response;
}, function(error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;         //把axios对象挂到Vue原型上
Vue.prototype.API = API;             //把API对象挂到Vue原型上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //template: '<App/>',
  //components: { App }
  render:h => h(App)
})
