<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">借款信息</div>
      </header>
      <!--列表-->
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>借款时间</p>
          </div>
          <div class="weui-cell__ft">2017-11-11-15:11:02</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>借款种类</p>
          </div>
          <div class="weui-cell__ft">分期</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>借款期限</p>
          </div>
          <div class="weui-cell__ft">6期</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>接口金额</p>
          </div>
          <div class="weui-cell__ft">￥1000</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>还款状态</p>
          </div>
          <div class="weui-cell__ft">已还清</div>
        </div>
      </div>
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
