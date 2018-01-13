<template>
  <div class="replenishInfo">
    <header class="head"><img src="../assets/img/return.png"  @click="returnBack()" alt="">补充信息</header>
    <div class="lists">
      <ul>
       <!--  <li>

          <input type="text" placeholder="单位名称" v-model="info.name">
        </li>
        <li>

          <input type="text" placeholder="单位地址" v-model="info.num">
        </li>
        <li>
          <input type="text" placeholder="所属行业" v-model="info.password">
        </li>
        <li>
          <input type="text"  class="last"
          placeholder="邮箱" v-model="info.password">
        </li> -->
      </ul>
     </div>
     <div class="buttonRegister">
        <button  id="showModel">申请</button>
     </div>
    <div>
 </div>


  </div>
</template>
<script>

export default {
  data () {
    return {
      info : {
        name: "",
        num: "",
      },
      show: false,
      has: false
    }
  },
  methods: {
    clickProtocol: function () {
      var that = this;
      if (that.show) {
        that.show = false;
      } else{
        that.show = true;
      }
    },
   returnBack: function(){

    this.$router.go(-1);
    },
   clickCross: function () {
    this.has = false;
   }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/reset.less';
@import '../assets/css/replenishInfo.less';

</style>
