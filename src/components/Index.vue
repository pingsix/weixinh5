<template>
<div>
    <!--首页轮播图开始-->
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item" v-bind:class="{'active':index==0}" v-for="(item,index) in bannerList">
            <img :src="item.bannerinfoImageUrl" alt="">
            <div class="carousel-caption">
            </div>
          </div>
        </div>
      </div>
    <!--首页轮播图结束-->
    <div class="notice">
       <img src="../assets/img/notice.png"/>2-07 13:09 尾号9875用户借款成功......
    </div>
    <canvas id="meter" width="360" height="180"></canvas>
    <div class="container" style="clear:both;">
       <h2 class="font18" style="float:left;">借款期限</h2>
    </div>
    <div class="weui-tab">
       <div class="btn-group btn-group-lg" role="group" aria-label="" style="margin-bottom:20px;">
          <button class="btn btn-default weui-navbar__item weui-bar__item--on"  href="#tab1">3期</button>
          <button type="button" class="btn btn-default weui-navbar__item"  href="#tab2">6期</button>
          <button type="button" class="btn btn-default weui-navbar__item"  href="#tab3">9期</button>
          <button type="button" class="btn btn-default weui-navbar__item"  href="#tab4">12期</button>
        </div>
      <div class="weui-tab__bd">
          <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
              每月约还款:<span style="color:#ff0000">659.28元</span>
          </div>
          <div id="tab2" class="weui-tab__bd-item">
          fff
          </div>
          <div id="tab3" class="weui-tab__bd-item">
          aaa
          </div>
          <div id="tab4" class="weui-tab__bd-item">
          ddd
          </div>
      </div>
    </div>
    <router-link to="/nameSure" class="btn btn-block btnBlue" style="margin-top:20px;">马上借钱</router-link >
    <!--底部导航-->
  <!--   <div class="weui-tabbar">
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
  name: 'index',
  components: {

  },
  data(){
      return {
       bannerList:[]
      }
  },
  mounted(){
   this.touchSlide();
   this.onload();
   this.timerImg();
   this.progressLoad();
   this.carouselBanner();
  },
  methods:{
     carouselBanner:function(){
       var _this=this;
       _this.API.post("/gateway/gateway",{serviceId:"JUNCAI0007",channelNumber:"03",mechanismNumber:"01",versionNumber:"V1.0"})
       .then(function(res){
          _this.bannerList=res.data;
          console.log(_this.bannerList);
       })
     },
    //touch模块，手滑动方法
    touchSlide() {
        var $carousels = $('.carousel');
        var startX, endX;
        var offset = 50;
        $carousels.on('touchstart', function (e) {
          startX = e.originalEvent.touches[0].clientX;

        });
        $carousels.on('touchmove', function (e) {
          endX = e.originalEvent.touches[0].clientX;
        });
        $carousels.on('touchend', function (e) {
          //console.log(endX);
          var distance = Math.abs(startX - endX);
          if (distance > offset) {
            $(this).carousel(startX > endX ? 'next' : 'prev');
          }
        })
    },
    timerImg:function(){
       $('.carousel').carousel({
         interval:2000
       })
    },
    onload:function(){
    var Meter = (function () {

            var options = {

                styles: {
                    sAngle: 0.93,
                    eAngle: 2.07,
                    area: {
                        radius:0,
                        lineWidth: 1,
                        scaleLength: 9,
                        scaleWidth: 0,
                        lineColor: '#fff'
                    },
                    //蓝色进度条样式
                    range: {
                        color: '#5AB8FB',
                        width:5,
                        arrow: {
                            height: 0,
                            radius: 16
                        }
                    },
                    //圆球样式
                    range1: {
                        color: '#FCBD01',
                        //width: 2,
                        arrow: {
                            height: 0,
                            radius: 16
                        }
                    },
                    //借款金额数字样式
                    value: {
                        margin: -80,
                        color: '#FBD854',
                        font: 'bold 35px Microsoft YaHei'
                    },
                    //借款金额字体样式
                    title: {
                        margin: -30,
                        color: '#464646',
                        font: 'bold 16px Microsoft YaHei'
                    },
                    subTitle: {
                        margin: 25,
                        color: '#999',
                        font: '14px Microsoft YaHei'
                    },
                    label: {
                        radius: 48,
                        color: '#aaa',
                        background: '#f5f5f5',
                        font: '12px Microsoft YaHei'
                    },
                    //蓝色线条宽度
                    inner: {
                        radius: 120,
                        color: '#fff'
                    }
                }
            };

            var element,
                    context,
                    styles,
                    sAngle,
                    eAngle,
                    areaStyle,
                    rangeStyle,
                    rangeStyle1,
                    valueStyle,
                    titleStyle,
                    subTitleStyle,
                    labelStyle,
                    innerStyle;

            var extend = function(obj1, obj2){
                for(var k in obj2) {
                    if(obj1.hasOwnProperty(k) && typeof obj1[k] == 'object') {
                        extend(obj1[k], obj2[k]);
                    } else {
                        obj1[k] = obj2[k];
                    }
                }
            }

            var calcLocation = function(r, end){

                return {
                    x: options.centerPoint.x + r * Math.cos(Math.PI * end),
                    y: options.centerPoint.y + r * Math.sin(Math.PI * end)
                };
            }

            var calcValueRange = function(value){
                var data = options.data.area,
                        index = data.length - 1;

                for (var i = index; i >= 0; i--) {
                    if(value >= data[i].min && value < data[i].max){
                        index = i;
                    }
                };
                var r = (eAngle - sAngle)/data.length,
                        s = r * index + sAngle,
                        e = r * (index + 1) + sAngle,
                        o = data[index];

                return {
                    range: (value - o.min)/(o.max - o.min) * (e - s) + s,
                    index: index
                };
            }

            var drawCircle = function(opts, flag) {
                var x = opts.x || options.centerPoint.x,
                        y = opts.y || options.centerPoint.y,
                        s = opts.start || 0,
                        e = opts.end || 2;

                context.beginPath();
                context.moveTo(x, y);

                switch(flag){
                    case 1:
                        context.setLineDash && context.setLineDash([innerStyle.dashedWidth]);
                    case 2:
                        context.arc(x, y, opts.r, Math.PI*s, Math.PI*e);
                        context.closePath();
                        context.strokeStyle = opts.style;
                        context.stroke();
                        break;
                    default:
                        context.arc(x, y, opts.r, Math.PI*s, Math.PI*e);
                        context.closePath();
                        context.fillStyle = opts.style;
                        context.fill();
                        break;
                }
            }

            var drawArea = function(){
                var grad  = context.createLinearGradient(0, 0, options.radius*2, 0);

                drawCircle({
                    r: options.radius,
                    start: sAngle,
                    end: eAngle
                });
            }

            var drawValueRange = function(valueRange){

                var r = options.radius - areaStyle.radius;
                //蓝色线条动画
                drawCircle({
                    r: r - labelStyle.radius,
                    start: sAngle,
                    end: valueRange.range,
                    style: rangeStyle.color
                });
                //灰色进度条
                drawCircle({
                    r: r - labelStyle.radius - rangeStyle.width,
                    style: '#F1F1F1'
                });
            }

            var fillText = function(opts){
                context.font = opts.font;
                context.fillStyle = opts.color;
                context.textAlign = opts.align || 'center';
                context.textBaseline = opts.vertical || 'middle';
                context.moveTo(opts.x, opts.y);
                context.fillText(opts.text, opts.x, opts.y);
            }

            var drawInnerContent = function(valueRange, value){
                drawCircle({
                    r: innerStyle.radius,
                    start: sAngle,
                    end: eAngle,
                    style: innerStyle.color
                }, 1);
                //内环
                drawCircle({
                    r: innerStyle.radius+1,
                    style: '#fff'
                });

                var data = options.data;
                //这是金额字体
                fillText({
                    font: valueStyle.font,
                    color: valueStyle.color,
                    text: value,
                    x: options.radius,
                    y: options.radius + valueStyle.margin
                });
                //借款金额字体
                fillText({
                    font: titleStyle.font,
                    color: titleStyle.color,
                    text: data.title.replace('{t}', data.area[valueRange.index].text).replace('{v}', value),
                    x: options.radius,
                    y: options.radius + titleStyle.margin
                });
            }

            var drawArrow = function(valueRange){
                var r = options.radius - areaStyle.radius - labelStyle.radius,
                        loc = calcLocation(r, valueRange.range),
                        x = loc.x - 1,
                        y = loc.y + 0.5;
                //圆球图片动画
                drawCircle({
                    x: x,
                    y: y,
                    r: rangeStyle1.arrow.radius,
                    style: rangeStyle1.color
                });

                var a = calcLocation(r - rangeStyle.arrow.height, valueRange.range),
                        b = calcLocation(r, valueRange.range - 0.01),
                        c = calcLocation(r, valueRange.range + 0.01);

                context.beginPath();
                context.moveTo(a.x - 1, a.y + 0.5);
                context.lineTo(b.x - 1, b.y + 0.5);
                context.lineTo(c.x - 1, c.y + 0.5);
                context.closePath();
                context.fillStyle = rangeStyle.color;
                context.fill();
            }

            var drawLine = function(line) {
                context.beginPath();
                context.moveTo(line.start.x, line.start.y);
                context.lineTo(line.end.x, line.end.y);
                context.closePath();
                context.strokeStyle = line.style;
                context.lineWidth = line.width || 1;
                context.stroke();
            }

            var drawTickMarks = function(){
                var scaleLength = areaStyle.scaleLength,
                        data = options.data.area,
                        len = scaleLength * data.length,
                        range = (eAngle - sAngle)/len;

                for(var j = 1; j < len; j++){
                    drawLine({
                        start: calcLocation(options.radius, sAngle + range * j),
                        end: calcLocation(options.radius - areaStyle.radius, sAngle + range * j),
                        style: areaStyle.lineColor,
                        width: j % scaleLength == 0 ? areaStyle.lineWidth: areaStyle.scaleWidth
                    });
                }

                var lblArr = [];
                for(var i = 0; i < data.length; i++){
                    var o = data[i];
                    // 如果不需兼容IE9以下则不用join
                    if(lblArr.join('').indexOf(o.min) == -1) {
                        lblArr.push(o.min);
                    }
                    lblArr.push(o.max);

                }

                var lblLen = lblArr.length - 1,
                        lblRange = (eAngle - sAngle)/lblLen,
                        lblOpt = labelStyle,
                        lblR = options.radius - areaStyle.radius - lblOpt.radius/2;

                for(var k = 0; k <= lblLen; k++){
                    var loc = calcLocation(lblR, sAngle + lblRange * k);
                    lblOpt.x = loc.x;
                    lblOpt.y = loc.y;
                    lblOpt.text = lblArr[k];
                    fillText(lblOpt);
                }

            }

            var drawing = function(w, h) {
                var value = options.data.value,
                        valueTemp = options.data.area[0].min;

                var timer = setInterval(function(){
                    context.clearRect(0, 0, w, h);
                    context.fillStyle = "#fff";
                    context.fillRect(0, 0, w, h);

                    valueTemp = valueTemp + 100 > value ? value: valueTemp + 100;
                    var valueRange = calcValueRange(valueTemp);

                    drawArea();
                    drawValueRange(valueRange);
                    drawInnerContent(valueRange, valueTemp);
                    drawArrow(valueRange);
                    drawTickMarks();

                    if(valueTemp === value) {
                        clearInterval(timer);
                    }
                }, 10);
            }

            var exports = {};

            exports.setOptions = function(opts){
                extend(options, opts);

                styles = options.styles;
                sAngle = styles.sAngle;
                eAngle = styles.eAngle;
                areaStyle = styles.area;
                rangeStyle = styles.range;
                rangeStyle1 = styles.range1;
                valueStyle = styles.value;
                titleStyle = styles.title;
                subTitleStyle = styles.subTitle;
                labelStyle = styles.label;
                innerStyle = styles.inner;

                element = typeof options.element == 'string' ? document.getElementById(options.element) : options.element;
                context = element.getContext('2d');
                return exports;
            };

            exports.init = function(){
                drawing(element.offsetWidth, element.offsetHeight);
                return exports;
            }

            return exports;
        })();

        Meter.setOptions({
            element: 'meter',
            centerPoint: {
                x: 180,
                y: 140
            },
            radius: 180,
            data: {
                value: 30000,
                title: '借款金额',
                area: [{
                    min: 2000, max: 100000
                }
                 ]
            }
        }).init();
    },
    //打开页面时，加载蓝色进度条方法
    progressLoad:function(){
       //setTimeout("alert('进度条加载')",5000)
    }
  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.weui-tabbar__item.weui-bar__item--on .weui-tabbar__label{color:#56BBFF;}
.notice{float:left;margin:10px 0 0 10px;}
.circle_canvas{clear:both;}
.btn-lg, .btn-group-lg > .btn{margin-right:20px;padding:10px 25px;}
.btn-lg, .btn-group-lg > .btn:last-child{margin-right:0px;}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:5px;border-bottom-right-radius:5px;}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:5px;}
.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child){border-top-left-radius:5px;border-bottom-left-radius:5px;}
</style>
