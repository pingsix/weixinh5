<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">其他详细信息</div>
      </header>
      <!--列表-->
     <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
            <p>京东账号</p>
          </div>
          <div class="weui-cell__ft">
            张三
          </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
            <p>淘宝账号</p>
          </div>
          <div class="weui-cell__ft">
            18201358659
          </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
            <p>社保证号</p>
          </div>
          <div class="weui-cell__ft">
             121299383839282393****
          </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
            <p>公积金</p>
          </div>
          <div class="weui-cell__ft">
             121299383839282393****
          </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
              <p>邮箱</p>
            </div>
            <div class="weui-cell__ft">
               1838493835
            </div>
        </a>
     </div>
     <button class="btn btn-block btnBlue" style="margin-top:20px;">确定</button>
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
