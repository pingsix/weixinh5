<template>
<div class="content">

   <header class="head"><img src="../assets/img/return.png" height="34" width="18" alt="" @click="returnBack()">水象云贷</header>
   <div class="banner">
     <div class="statement">
       <div class="left">
         12月账单 <span>11/04-12/3</span>
       </div>
       <div class="right">
         还款日 <span>12/21</span>
       </div>
     </div>
     <div class="repay">
       <span class="now">当期应还</span>
       <span class="amount">¥ <span>928.20</span></span>
     </div>
     <div class="nowStatus">
      <div class="statusLeft">
       <span class="now">账单总金额</span>
       <span class="amount">¥ <span>928.20</span></span>

      </div>
      <span class="linear"></span>
      <div class="statusRight">
       <span class="now">当前状态</span>
       <span class="amount">待还款</span>
      </div>
     </div>
   </div>
   <div class="lists">
      <ul>
        <li v-for="item in clickLists"  @click="clickChange(item,$event)">
          <router-link  tag="div" :to="item.router" :class="{active: item.show}">
            <img src="../assets/img/record.png" height="34" width="31" alt="" class="imgOne">{{item.text}} <img src="../assets/img/prev.png" height="28" width="15" alt="" class="imgTwo"></router-link>

        </li>
      </ul>
   </div>
  <router-view></router-view>
</div>
</template>
<script>

export default {
  data () {
    return {
      clickLists: [
        {
         text: "账单查询",
         prev: "../assets/img/prev.png",
         show: true,
         router:"/billSee"

        },
        {
         text: "我要还款",
         prev: "../assets/img/prev.png",
         show: false,
         router:"/wantRepay"

        },
        {
         text: "我的还款计划",
         prev: "../assets/img/prev.png",
         show: false,
         router:"/repayPlan"

        },
        {
         text: "还款记录",
         prev: "../assets/img/prev.png",
         show: false,
         router:"/repayRecord"

        },
        {
         text: "更改绑定银行卡",
         prev: "../assets/img/prev.png",
         show: false,
         router:"/changeCord"

        }
      ]
    }
  },
  created() {
    this.get();
  },

  methods: {
   clickChange: function(item,event){
     var that = this ;
     if (item.show) {
      item.show = false;
     } else {
      that.clickLists.forEach(function(i) {
        i.show = false;
      })
      item.show = true;
     }
    },
   returnBack: function(){
    console.log('1234');
    this.$router.go(-1);
    },
   get: function() {


   }
    },


  }
</script>
<style scoped lang="less">
@import '../assets/css/reset.less';
@import '../assets/css/cloudLoan.less';
</style>
