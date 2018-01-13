<template>
   <div>
      <header>
         <div @click="routerBack();" class="head-back"></div>
         <div class="font17" style="line-height:50px;">还款计划</div>
      </header>
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
</style>
