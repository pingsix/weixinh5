<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">个人信息</div>
      </header>
      <!--列表-->
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>姓名</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>手机号</p>
          </div>
          <div class="weui-cell__ft">{{mobile}}</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>身份证号</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>银行卡号</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>紧急联系人</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>紧急联系人手机号</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <!--其他详细信息-->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
            <p>其他详细信息</p>
          </div>
          <div class="weui-cell__ft">
          </div>
        </a>
      </div>
      <button class="btn btn-block btn-danger" style="width:90%;margin:0 auto;height:40px;" @click="btnExit();">安全退出</button>
   </div>
</template>
<script>
export default {
  components: {

  },
  data(){
      return {
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
     },
     btnExit:function(){
       var _this=this;
       _this.API.post('/gateway/gateway',{channelNumber:"03",mechanismNumber:"01",serviceId:"JUNCAI0009",versionNumber:"V1.0",data:{mobile:this.mobile}})
       .then(function(res){
          if(res.code=="000000"){
             sessionStorage.removeItem('id');
             _this.$router.push({path:'/personCenter'});
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
.weui-cell__bd>p{float:left;margin:0;}
</style>
