<template>
   <div>
       <header>
           <div @click="routerBack();" class="head-back"></div>
           <div class="font17" style="line-height:50px;">登录</div>
       </header>
        <!--按钮组-->
       <div class="btn-group btn-group-lg" role="group" aria-label="" style="margin-bottom:20px;">
         <button type="button" class="btn btn-default" style="background-color:#56BBFF;color:#fff">密码登录</button>
         <button type="button" class="btn btn-default" style="color:#56BBFF">快速登录</button>
       </div>
       <div class="weui-cells">
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p><input placeholder="请输入手机号" style="border:none;"/></p>
             </div>
           </div>
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p style="float:left;"><input placeholder="请输入密码" style="border:none;"/></p>
               <p style="float:right;margin-right:20px;"><button class="btn btn-default">发送验证码</button></p>
             </div>
           </div>
       </div>
       <button class="btn btn-block btnBlue">登录</button>
       <p class="loginMessage">注册登录即视为同意<span>《用户服务协议》</span></p>
   </div>
</template>
<script>
export default {
  components: {

  },
  data(){
      return {

      }
  },
  mounted(){

  },
  methods:{
    routerBack()
      {
       this.$router.go(-1);
      }
  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.weui-cell{padding:0;}
.weui-cell__bd p{float:left;margin-top:15px;}
.weui-cells{margin-top:0;}
input:focus {outline:none}
.btn-default{border-color:#56BBFF;color:#56BBFF;}
.btn-lg, .btn-group-lg > .btn{font-size:16px}
.loginMessage{margin-top:20px;}
.loginMessage span{color:#56BBFF}

</style>
