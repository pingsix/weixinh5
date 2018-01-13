<template>
  <div class="register">
    <header class="head"><img src="../assets/img/return.png"  @click="returnBack()" alt="">注册</header>
    <div class="lists">
      <ul>
        <li>
          <img src="../assets/img/cellphone.png" height="34" width="28" alt="">
          <input type="text" placeholder="请输入手机号码" v-model="registerInfo.phoneNum">
        </li>
        <li>
          <img src="../assets/img/validate.png" height="34" width="31" alt="">
          <input type="text" placeholder="请输入验证码" v-model="registerInfo.code">
          <span class="reminder" @click="verification()">发送验证码</span>
        </li>
        <li>
          <img src="../assets/img/codedlock.png" height="34" width="32" alt="">
          <input type="text" placeholder="请输入密码" v-model="registerInfo.password"></li>
        <li>
          <img src="../assets/img/Verifypassword.png" height="34" width="32" alt="">
          <input type="text" placeholder="请重复密码" class="last-child" v-model="registerInfo.rePassword"></li>
      </ul>
     </div>
     <div class="buttonRegister">
        <button  id="showModel"  @click="clickRegister()">注册</button>
     </div>
     <div class="protocol">
       <img src="../assets/img/No option .png" height="34" width="34" alt="" @click="clickProtocol">
       <img src="../assets/img/option .png" height="34" width="34" alt="" v-if="show" @click="clickProtocol">
       <span class="one">注册登录即视为同意</span>
       <span class="two"><<用户服务协议>></span>
     </div>
    <div>
    <div id="modal" class="modal" v-if="has">
      <div class="modal-content">
        <div class="succeed">
        恭喜您，已注册成功
        <img src="../assets/img/success.png" height="34" width="34" alt="">
       </div>
      <img  class="cross" src="../assets/img/cross.png" alt="" @click="clickCross()">
      </div>
    </div>
 </div>


  </div>
</template>
<script>

export default {
  data () {
    return {
      registerInfo : {
        phoneNum: "",
        code: "",
        password: "",
        rePassword: ""
      },
      show: false,
      has: false
    }
  },
  methods: {
    verification: function (){

    },

    clickProtocol: function () {
      var that = this;
      if (that.show) {
        that.show = false;
      } else{
        that.show = true;
      }
    },
   returnBack: function(){

    this.$router.go(-1);
    },
   clickRegister: function(){
      this.has = true;
   },
   clickCross: function () {
    this.has = false;
   }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/reset.less';
@import '../assets/css/register.less';

</style>
