<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">实名认证</div>
      </header>
      <!--列表-->
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>姓名</p>
          </div>
          <div class="weui-cell__bd">
              <p><input style="border:none;width:280px;"/></p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>身份证</p>
          </div>
          <div class="weui-cell__bd">
            <p><input style="border:none;width:280px;"/></p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>手机号</p>
          </div>
          <div class="weui-cell__bd">
            <p><input style="border:none;width:280px;"/></p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>银行卡</p>
          </div>
          <div class="weui-cell__bd">
            <p><input style="border:none;width:280px;"/></p>
          </div>
        </div>
      </div>
       <router-link  to="/otherInfor" class="btn btn-block btnBlue" style="margin-top:20px;">下一步</router-link>
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
.weui-cell__bd>p{float:left;margin:0;}
</style>
