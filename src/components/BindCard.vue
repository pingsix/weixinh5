<template>
   <div>
    <header>
       <div class="font17" style="line-height:50px;">水象云贷</div>
    </header>
    <div>
       <img src="../assets/img/card.png"/>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>新银行卡号：</p>
        </div>
        <div class="weui-cell__ft">6446621788887522</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>姓名：</p>
        </div>
        <div class="weui-cell__ft"><input placeholder="真实姓名"/></div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>验证码：</p>
        </div>
        <div class="weui-cell__ft">
        <input placeholder="6位验证码" style="width:150px;"/>
        <button class="btnNone">发送验证码</button>
        </div>
      </div>
      <button class="btn btn-block btnLine">扫描银行卡</button>
      <p style="margin-top:20px;"><button class="btn btn-block btnBlue">绑定银行卡</button></p>
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

  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.weui-cell__bd{flex:none;}
.weui-cell__bd>p{float:left;margin:0;width:130px;text-align:right;}
.weui-cell__bd input{border:none;}
.weui-cell__ft input{border:none;}
</style>
