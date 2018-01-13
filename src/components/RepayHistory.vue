<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">借款记录</div>
      </header>
      <div class="weui-tab">
         <div class="weui-navbar">
           <a class="weui-navbar__item weui-bar__item--on" href="#tab1">当前借款</a>
           <a class="weui-navbar__item" href="#tab2">历史借款记录</a>
         </div>
         <div class="weui-tab__bd">
           <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
               <!--列表选项-->
               <div class="weui-cells">
                   <a class="weui-cell weui-cell_access" href="javascript:;">
                     <div class="weui-cell__bd">
                       <p>借款金额</p>
                     </div>
                     <div class="weui-cell__ft">
                     </div>
                   </a>
                   <a class="weui-cell weui-cell_access" href="javascript:;">
                     <div class="weui-cell__bd">
                       <p>借款金额</p>
                     </div>
                     <div class="weui-cell__ft">
                     </div>
                   </a>
               </div>
           </div>
            <div id="tab2" class="weui-tab__bd-item">
                页面二
            </div>
         </div>
       </div>
      <!--底部导航-->
     <!--  <div class="weui-tabbar">
         <router-link to="/index" class="weui-tabbar__item">
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
     routerBack:function(){
       this.$router.go(-1);
     }
  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.weui-navbar{background-color:#fff;color:#000;border:1px solid #F0F0F0;border-bottom:none;}
.weui-navbar__item.weui-bar__item--on{background-color:#56BBFF;color:#fff;}
.weui-cell__bd>p{float:left;margin:0;}
</style>
