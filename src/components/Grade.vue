<template>
  <div class="grade">
   <div class="contenTop">
     <header class="head"><img src="../assets/img/gradeReturn.png" @click="routerBack()" height="34" width="18" alt="">水象评分</header>
      <div class="circle">
        <canvas id="canvas_1" width="200" height="200"></canvas>
        <canvas id="canvas_2" width="200" height="200"></canvas>
     </div>

     <div class="gradeData">等级评分</div>
   </div>
   <div class="contenBottom">
    <div class="content">
      <div class="title">评分规则</div>
      <ul>
        <li><span></span>多次主动还款，水象评分提升</li>
        <li><span></span>连续三个月正常还款(包括主动还款)，水象评分提升</li>
        <li><span></span>填写提额资料，水象评分提升</li>
        <li><span></span>逾期未还款，水象评分降低</li>
        <li><span></span>水象评分每月进行更新</li>
      </ul>
    </div>



   </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
     newShow: false,
     systemShow: true,
    }
  },
  methods: {
    news: function (){
      this.newShow = true;
      this.systemShow = false;
    },
    routerBack()
      {
       this.$router.go(-1);
      },
    system: function (){
      this.newShow = false;
      this.systemShow = true;
    },
    inte: function (percent) {
       var canvas_1 = document.getElementById('canvas_1');
        var canvas_2 = document.getElementById('canvas_2');

        var ctx_1 = canvas_1.getContext('2d');
        var ctx_2 = canvas_2.getContext('2d');
        ctx_1.lineWidth = 6;
        ctx_1.strokeStyle = "#bbdeff";
        //画底部的灰色圆环
        ctx_1.beginPath();
        ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
        ctx_1.closePath();
        ctx_1.stroke();
        if (percent < 0 || percent > 100) {
            throw new Error('percent must be between 0 and 100');
            return
        }
        ctx_2.lineWidth = 6;
        var angle = 0;
        var timer;
        (function draw() {
            timer = requestAnimationFrame(draw);
            ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
            //百分比圆环
            ctx_2.beginPath();
            ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
            angle++;
            var percentAge = parseInt((angle / 360) * 100)
            // var gradient=ctx.createLinearGradient(0,0,c.width,0);
            // gradient.addColorStop("0","magenta");
            // gradient.addColorStop("0.5","blue");
            // gradient.addColorStop("1.0","red");
             ctx_2.strokeStyle = "rgba(0,0,0,"+percentAge/100+")";
            if (angle > (percent / 100 * 360)) {
                percentAge = percent
                window.cancelAnimationFrame(timer);
            };
            ctx_2.stroke();
            ctx_2.closePath();
            ctx_2.save();
            ctx_2.beginPath();
            ctx_2.rotate(90 * Math.PI / 180)
            ctx_2.font = '40px Arial';
            ctx_2.fillStyle = 'white';
            var text = percentAge ;
            ctx_2.fillText(text, 80, -90);
            ctx_2.closePath();
            ctx_2.restore();
        })()
    }
  },
  mounted () {
  this.inte(60)
}
}






</script>
<style scoped lang="less">
@import '../assets/css/reset.less';
@import '../assets/css/grade.less';
</style>
