<template>
   <div>
       <header>
           <div @click="routerBack();" class="head-back"></div>
           <div class="font17" style="line-height:50px;">修改密码</div>
       </header>
       <div class="weui-cells">
           <div class="weui-cell">
              <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
              <div class="weui-cell__bd">
                <p><input v-model="oldpassword" placeholder="输入原密码" type="password" style="border:none;"/></p>
              </div>
           </div>
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p><input v-model="newpassword" placeholder="输入新密码" type="password" style="border:none;"/></p>
             </div>
           </div>
           <div class="weui-cell">
             <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
             <div class="weui-cell__bd">
               <p><input v-model="newpassword2"  placeholder="再次输入新密码" type="password" style="border:none;"/></p>
             </div>
           </div>
       </div>
       <button class="btn btn-block btnBlue" style="margin-top:30px;" @click="modifyPwd();">确定</button>
       <!--底部导航-->
    <!--    <div class="weui-tabbar">
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
        newpassword:"",
        newpassword2:"",
        oldpassword:""
      }
  },
  mounted(){

  },
  methods:{
    routerBack()
      {
       this.$router.go(-1);
      },
      modifyPwd:function(){
       var _this=this;
       _this.API.post("/gateway/gateway",{channelNumber:"03",mechanismNumber:"01",serviceId:"JUNCAI0014",versionNumber:"V1.0",data:{mobile:this.mobile,newpassword:this.newpassword,oldpassword:this.oldpassword,token:""}})
       .then(function(res){
          if(res.code=="000000"){
           if(newpassword==newpassword2){
            alert("修改成功!");
           }
          }
       })
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
input:focus {outline:none}
.weui-cell__bd>p{margin:0 auto;}
</style>
