<template>
   <div>
       <header>
           <div @click="routerBack();" class="head-back"></div>
           <div class="font17" style="line-height:50px;">帮助中心</div>
       </header>
       <img src="../assets/img/help.png"/>
       <div class="weui-cells">
           <div class="weui-cell">
            <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
            <div class="weui-cell__bd">
              <p>疑难问题解答</p>
            </div>
           </div>
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p>微信：18811813896</p>
             </div>
           </div>
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p>QQ：1532243919</p>
             </div>
           </div>
       </div>
       <!--底部导航-->
       <!-- <div class="weui-tabbar">
          <router-link to="/index" class="weui-tabbar__item weui-bar__item--on">
              <div class="weui-tabbar__icon">
                <img src="../assets/img/home.png" alt="">
              </div>
              <p class="weui-tabbar__label">首页</p>
          </router-link>
           <a href="javascript:;" class="weui-tabbar__item">
               <div class="weui-tabbar__icon">
                 <img src="../assets/img/money.png" alt="">
               </div>
               <p class="weui-tabbar__label">还款</p>
           </a>
            <router-link to="/personCenter" class="weui-tabbar__item">
              <div class="weui-tabbar__icon">
                <img src="../assets/img/center.png" alt="">
              </div>
              <p class="weui-tabbar__label">个人中心</p>
            </router-link>
       </div> -->
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
.weui-cell__bd p{float:left;margin-top:15px;}
.weui-cells{margin-top:0;}
</style>
