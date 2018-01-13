<template>
  <div class="footer">
     <ul>
       <li
       v-for="item in imgArr"
       @click="change(item,$event)"
       >
         <router-link  :to="item.router"  >
           <img  :src="item.notClick" height="32" width="34" alt=""  v-show="item.imgShowO">
           <img :src="item.click" height="32" width="34" alt=""  v-show="item.imgShowT">
           <span :class="{'active': item.imgShowT}">{{item.text}}</span>
         </router-link>
       </li>
     </ul>
 </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      imgArr: [
        {
          notClick: './src/assets/img/homeN.png',
          click: './src/assets/img/clickHome.png',
          text: '首页',
          imgShowT: true,
          imgShowO: false,
          router: '/Index'
        },
        {
          notClick: './src/assets/img/refund.png',
          click: './src/assets/img/clickRefund.png',
          text: '还款',
          imgShowT: false,
          imgShowO: true,
          router: '/repay'
        },
        {
          notClick: './src/assets/img/personal.png',
          click: './src/assets/img/clickPersonal.png',
          text: '个人中心',
          imgShowT: false,
          imgShowO: true,
          router: '/personCenter'
        }
      ],
    }
  },
  created(){
   var that = this;
   that.default();
  },
  watch: {
    '$route': function(to, from) {
       this.default();
    }
  },
  methods: {
    change: function(item,event){

      var that = this;
      if (item.imgShowT) {
        item.imgShowT = false;
        item.imgShowO = true
      } else {
        that.imgArr.forEach(function(i) {
          i.imgShowT = false;
          i.imgShowO = true
        })
        item.imgShowO = false;
        item.imgShowT = true;
      }
    },
    default: function () {
      var that = this;
      that.imgArr.forEach(function(item){
          item.imgShowO = true;
          item.imgShowT = false;
        if (item.router == that.$route.path ) {
          item.imgShowO = false;
          item.imgShowT = true;
        }
      })
      if (that.$route.path == "/" || that.$router.path == "") {
          that.imgArr[0].imgShowO = false;
          that.imgArr[0].imgShowT = true;
        }
    },
  }
 }
</script>
<style scoped lang="less">
@import '../assets/css/reset.less';
@import '../assets/css/footer.less';
</style>
