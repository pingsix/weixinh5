<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">水象云贷</div>
      </header>
      <div class="weui-cells weui-cells_checkbox" style="margin-bottom:20px;">
        <label class="weui-cell weui-check__label" for="s11">
          <div class="weui-cell__bd">
            <p>我要还当期：500.56元</p>
          </div>
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
            <i class="weui-icon-checked"></i>
          </div>
        </label>
        <label class="weui-cell weui-check__label" for="s12">
            <div class="weui-cell__bd">
               <p>我要一次结清：2000.76</p>
            </div>
            <div class="weui-cell__hd">
              <input type="checkbox" name="checkbox1" class="weui-check" id="s12">
              <i class="weui-icon-checked"></i>
            </div>
        </label>
      </div>
      <div class="changeBox"><span>选择还款方式</span></div>
      <div class="weui-cells weui-cells_checkbox" style="margin-top:0;">
        <label class="weui-cell weui-check__label" for="s13">
          <div class="weui-cell__bd">
            <p>绑定银行卡还款：xxx元</p>
          </div>
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s13" checked="checked">
            <i class="weui-icon-checked"></i>
          </div>
        </label>
        <label class="weui-cell weui-check__label" for="s14">
            <div class="weui-cell__bd">
               <p>微信还款：xxx元</p>
            </div>
            <div class="weui-cell__hd">
              <input type="checkbox" name="checkbox1" class="weui-check" id="s14">
              <i class="weui-icon-checked"></i>
            </div>
        </label>
        <label class="weui-cell weui-check__label" for="s15">
            <div class="weui-cell__bd">
               <p>支付宝还款：xxx元</p>
            </div>
            <div class="weui-cell__hd">
              <input type="checkbox" name="checkbox1" class="weui-check" id="s15">
              <i class="weui-icon-checked"></i>
            </div>
        </label>
      </div>
      <button class="btn btn-block btnBlue" style="margin-top:20px;">还款</button>
      <!--底部导航-->
      <!-- <div class="weui-tabbar">
         <router-link to="/index" class="weui-tabbar__item weui-bar__item--on">
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
label{margin:0;}
.weui-cell__bd{font-weight:normal;}
.weui-cell__bd>p{float:left;margin:0;}
.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{color:#4CA6F8;}
.changeBox{height:44px;background-color:#F3F1F2;}
.changeBox>span{float:left;margin-left:10px;display:block;line-height:44px;}
</style>
