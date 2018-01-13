<template>
   <div>
       <header>
           <div @click="routerBack();" class="head-back"></div>
           <div class="font17" style="line-height:50px;">登录</div>
       </header>
        <!--按钮组-->
       <div class="weui-tab">
          <div class="btn-group btn-group-lg" role="group" aria-label="" style="margin-bottom:20px;">
               <button type="button" class="btn btn-default weui-navbar__item weui-bar__item--on"  href="#tab1">密码登录</button>
               <button type="button" class="btn btn-default weui-navbar__item"  href="#tab2">快速登录</button>
          </div>
       <div class="weui-tab__bd">
          <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
             <div class="weui-cells">
                <div class="weui-cell">
                  <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
                  <div class="weui-cell__bd">
                    <p><input placeholder="请输入手机号" style="border:none;" v-model="mobile"/></p>
                  </div>
                </div>
                <div class="weui-cell">
                  <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
                  <div class="weui-cell__bd">
                    <p><input placeholder="请输入密码" type="password" style="border:none;" v-model="password"/></p>
                  </div>
                </div>
             </div>
             <span class="pwd">忘记密码?</span>
              <button class="btn btn-block btnBlue" @click="loginPage();">确定</button>
              <p class="loginMessage">注册登录即视为同意<span>《用户服务协议》</span></p>
          </div>
          <div id="tab2" class="weui-tab__bd-item">
             <div class="weui-cells">
                <div class="weui-cell">
                  <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
                  <div class="weui-cell__bd">
                    <p><input placeholder="请输入手机号" v-model="mobile" style="border:none;"/></p>
                  </div>
                </div>
                <div class="weui-cell">
                  <div class="weui-cell__hd"><img src="../assets/img/icon1.png"></div>
                  <div class="weui-cell__bd">
                    <p style="float:left;"><input placeholder="请输入验证码" style="border:none;" v-model="checkCode"/></p>
                    <p style="float:right;margin-right:20px;"><button class="btn btn-default" @click="validateCode();">发送验证码</button></p>
                  </div>
                </div>
             </div>
              <button class="btn btn-block btnBlue" @click="quickLogin();">确定</button>
              <p class="loginMessage">注册登录即视为同意<span>《用户服务协议》</span></p>
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
       mobile:"",
       password:"",
       checkCode:"",
       bqsTokenKey:"",
       _saber:"",
       token:""
      }
  },
  mounted(){
  },
  methods:{
    routerBack()
      {
       this.$router.go(-1);
      },
      //密码登录
      loginPage:function(){
            var _this=this;
            _this.API.post("/gateway/gateway",{channelNumber:"03",mechanismNumber:"01",serviceId:"JUNCAI0003",versionNumber:"V1.0",data:{bqsTokenKey:'d7441f51-74e9-44bd-97f8-677c1f9a1271',mobile:this.mobile,password:this.password,token:this.token}})
            .then(function(res){
                  console.log(res);
                  if(res.code=="000000"){
                  _this.token=res.data.token;
                  _this.mobile=res.data.mobile;
                  sessionStorage.setItem('id',_this.mobile);
                  _this.$router.push({path:'/personCenter'});
                  //接入tokenKey
                  var  _saber={
                   partnerId:'beadwalletbj',
                   tokenKey:''
                  };
                    var aa=document.createElement('script');
                    aa.async=true;
                    aa.src=('https:'==document.location.protocol?'https://':'http://')+'df.baiqishi.com/static/webdf/saber.js?t='+(new Date().getTime()/3600000).toFixed(0);
                    var bb=document.getElementsByTagName('script')[0];
                    bb.parentNode.insertBefore(aa,bb);
                  }else{
                     alert("登录失败!")
                  }
            });
      },
      //发送验证码
      validateCode:function(){
           var _this=this;
           _this.API.post("/gateway/gateway",{channelNumber:"03",mechanismNumber:"01",serviceId:"JUNCAI0001",versionNumber:"V1.0",data:{mobile:this.mobile,requestType:"2"}})
           .then(function(res){
               if(res.code=="000000"){
                  //alert("发送成功!");
               }else{
                  //alert("发送失败!");
               }
           })
      },
      //快速登录
      quickLogin:function(){
        var _this=this;
        _this.API.post("/gateway/gateway",{channelNumber:"03",mechanismNumber:"01",serviceId:"JUNCAI0028",versionNumber:"V1.0",data:{checkCode:this.checkCode,mobile:this.mobile}})
        .then(function(res){
           if(res.code=="000000"){
          _this.$router.push({path:'/personCenter',query:{mobile:_this.mobile}});
          }else{
             alert("登录失败!")
          }
        })
      }
  },
  watch:{

  }
}
</script>
<style scoped>
@import '../assets/css/common.css';
.weui-navbar__item.weui-bar__item--on{background-color:#56BBFF;color:#fff;}
.weui-navbar__item{color:#56BBFF}
.weui-cell{padding:0px 0px;}
.weui-cell__bd p{float:left;margin-top:15px;}
.weui-cells{margin-top:0;}
.pwd{float:right;color:#ff0000;margin:10px 20px 20px 0}
.btn-default{border-color:#56BBFF}
.btn-lg, .btn-group-lg > .btn{font-size:16px}
.loginMessage{margin-top:20px;}
.loginMessage span{color:#56BBFF}
</style>
