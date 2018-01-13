<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">还款记录</div>
      </header>
      <div class="weui-tab">
          <div class="weui-navbar">
             <a class="weui-navbar__item weui-bar__item--on" href="#tab1">未还款账单</a>
             <a class="weui-navbar__item" href="#tab2">已还款账单</a>
          </div>
          <div class="weui-tab__bd">
          <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
            <table class="table table-condensed">
              <thead>
                  <tr style="background-color:#F3F1F2;">
                     <td>期数</td>
                     <td>金额</td>
                     <td>应还款时间</td>
                     <td style="color:#000;">状态</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>500.56</td>
                    <td>2018.56</td>
                    <td>待还款</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div id="tab2" class="weui-tab__bd-item">
                  <h1>页面二</h1>
        </div>
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
.table-condensed td{line-height:35px;}
.table-condensed tr:last-child{border-bottom:1px solid #eee;}
.table-condensed td:last-child{color:#ff0000;}
.weui-navbar{background-color:#fff;color:#000;border:1px solid #F0F0F0;border-bottom:none;}
.weui-navbar__item.weui-bar__item--on{background-color:#56BBFF;color:#fff;}
.weui-cell__bd>p{float:left;margin:0;}
</style>
