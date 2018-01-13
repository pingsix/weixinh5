<template>
   <div>
      <div class="center_bg">
        <header>
           <div @click="routerBack();" class="head-back1"></div>
        </header>
        <p class="login_img">
         <router-link v-if="mobile!=null" to="/personInfo"><img src="../assets/img/person_img.jpg" style="width:80px;height:80px;" class="img-circle"></router-link>
         <router-link v-if="mobile==null" to="/login"><img src="../assets/img/person_img.jpg" style="width:80px;height:80px;" class="img-circle"></router-link>
         <span v-if="mobile!=null">{{mobile}}</span>
         <span v-if="mobile==null">
          <router-link to="/login" style="color:#fff;">登录
          </router-link>
          <router-link to="/register" style="color:#fff;">/ 注册</router-link>
         </span>
        </p>
      </div>
      <!--按钮组-->
      <div class="group_button">
      <button class="btn1">进度查询</button>
      <button class="btn2">提额认证</button>
      </div>
      <!--列表选项-->
     <div class="weui-cells">
         <router-link class="weui-cell weui-cell_access" to="/pay">
           <div class="weui-cell__bd">
             <p>借款记录</p>
           </div>
           <div class="weui-cell__ft">
           </div>
         </router-link>
         <router-link class="weui-cell weui-cell_access" to="/help">
           <div class="weui-cell__bd">
             <p>帮助中心</p>
           </div>
           <div class="weui-cell__ft">
           </div>
         </router-link>
         <router-link class="weui-cell weui-cell_access" to="/setting">
            <div class="weui-cell__bd">
              <p>修改密码</p>
            </div>
            <div class="weui-cell__ft">
            </div>
         </router-link>
         <router-link to="/grade" class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
              <p>水象评分</p>
            </div>
            <div class="weui-cell__ft">
            </div>
         </router-link>
     </div>
     <!--底部导航-->
     <!-- <div class="weui-tabbar">
        <router-link to="/index" class="weui-tabbar__item">
            <div class="weui-tabbar__icon">
              <img src="../assets/img/home.png" alt="">
            </div>
            <p class="weui-tabbar__label">首页</p>
        </router-link>
         <router-link to="/repay" class="weui-tabbar__item">
             <div class="weui-tabbar__icon">
               <img src="../assets/img/money.png" alt="">
             </div>
             <p class="weui-tabbar__label">还款</p>
         </router-link>
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
        //mobile:this.$route.query.mobile
         mobile:""
      }
  },
  mounted(){
   this.getItem();
  },
  methods:{
    routerBack()
      {
       this.$router.go(-1);
      },
      getItem:function(){
         var _this=this;
         _this.mobile= sessionStorage.getItem('id');
      }
  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.center_bg{background:url('../assets/img/person_bg.jpg')fixed  center center;height:230px;background-size:100%;}
.login_img{padding-top:50px;}
.login_img span{display:block;color:#fff;margin-top:10px;}
.btn1{width:150px;border-radius:25px;border:1px solid #56BBFF;background-color:#fff;color:#56BBFF;height:40px;margin-right:10px;}
.btn2{width:150px;border-radius:25px;border:1px solid #56BBFF;background-color:#56BBFF;color:#fff;height:40px;}
.group_button{margin-top:20px;}
.weui-cell__bd>p{float:left;margin:0;}
</style>
