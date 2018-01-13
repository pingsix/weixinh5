<template>
   <div>
       <header>
           <div @click="routerBack();" class="head-back"></div>
       </header>
           <div class="font17" style="line-height:50px;">忘记密码</div>
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
               <p><input placeholder="请输入密码" style="border:none;"/></p>
               <p style="float:right;margin-right:20px;"><button class="btn btn-default"><span style="color:#56BBFF;">发送验证码</span></button></p>
             </div>
           </div>
       </div>
       <button class="btn btn-block btnBlue" style="margin-top:20px;">下一步</button>
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
.pwd{float:right;color:#ff0000;margin:10px 20px 20px 0}
.btn-default{border-color:#56BBFF}
.btn-lg, .btn-group-lg > .btn{font-size:16px}
.loginMessage{margin-top:20px;}
.loginMessage span{color:#56BBFF}
</style>
