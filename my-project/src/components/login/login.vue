<template>
  <div class="login-wrap">
  <div class="login-bg">
    <div class="swiper-wrapper">
      <div class="swiper-slide bg1"></div>
    </div>
  </div>
  <div class="pagination"></div>
  <div class="logo">智慧教育培训管理系统</div>
  <div class="login-list">

    <div class="login-wrap">
      <h3>用户登录</h3>
      <div class="div-user-panel">
        <div class="err-tips">
          <span class="user-warning ml-10"  v-show="showWrongMsg" >{{wrongMsg}}</span>
        </div>
        <input ref="username" id="user-username" type="text" class="username" placeholder="请输入账号 ">
        <input ref="password" id="user-password" type="password" class="password" placeholder="请输入密码">
      </div>
      <div class="div-message-panel">
        <div class="err-tips">
          <span class="user-warning ml-10">请输入正确的教师空间账号</span>
        </div>
        <input id="user-phone" type="text" class="phone" placeholder="请输入手机号码 ">
        <div class="div-msg-code">
          <input id="user-code" type="text" class="msg-code" placeholder="请输入验证码 ">
          <a href="javascript:void(0)" class="btn btn-msg-code">获取验证码<em></em></a>
        </div>
      </div>
      <div class="div-btn">
        <a class="btn btn-login" href="javascript:void(0)"  @click="click">登录</a>
      </div>
    </div>
    <div class="contact-way-panel none">

    </div>

  </div>
  </div>
</template>


<script>

import {mapGetters} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: ''
      
    }
  },
  computed:{
	  ...mapGetters({
      showWrongMsg: 'getShowWrongMsg',
      wrongMsg: 'getWrongMsg',
	  })
  },
  methods:{
	  test(data){
      var sendData ={
        'user_id':data
      }
		  this.$store.dispatch('getUserName',sendData)
    },
    click(){
      this.userName = this.$refs.username.value.trim();
      this.passWord = this.$refs.password.value.trim();
      if(this.userName == ''|| this.passWord == ''){
        this.$store.dispatch('changeSetWrongMsg',"用户名或密码不能为空");
        this.$store.dispatch('changeShowWrongMsg',true);
        return;
      }
      var sendData = {
        'user_name':this.userName,
        'password':this.passWord,
      }
      this.$store.dispatch('userLogin',sendData);
    },
    //错误信息展示3秒
    restState(){
      setTimeout(() => {
         this.$store.dispatch('changeShowWrongMsg',false);
      },3000)
    }

  },
  mounted(){

  },
  watch:{
    'showWrongMsg':'restState'
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .login-wrap{
      width: 100%;
      height: 100%;
    }
    .login-bg {
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1
    }

    .login-bg .swiper-wrapper {
      width: 100%;
      height: 100%
    }

    .login-bg .swiper-wrapper div {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative
    }

    .login-bg .swiper-wrapper div i {
      display: block;
      position: absolute
    }

    .login-bg .swiper-wrapper .bg1 {
      background-image: url("../../../static/images/login/login-bg.jpg")
     
    }

    .login-list {
      width: 360px;
      margin: -230px -200px 0;
      position: absolute;
      z-index: 11;
      top: 50%;
      right: 50%;
      padding: 40px 50px;
      border-top: 4px solid #448CFF;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      background-color: #fff
    }

    .login-list .err-tips {
      margin-top: 10px;
      color: #FF591F;
      font-size: 14px;
      line-height: 28px;
      height: 28px;
      /* visibility: hidden */
    }

    .login-list .login-wrap .div-user-panel {
      width: 100%;
      overflow: hidden
    }

    .login-list .login-wrap .div-message-panel {
      display: none;
      width: 100%;
      overflow: hidden
    }

    .login-list .login-wrap h3 {
      float: left;
      font-size: 20px;
      text-align: left;
      width: 100px;
      color: #000;
      opacity: .5
    }

    .login-list .login-wrap .change-model {
      float: right;
      font-size: 14px;
      color: #448CFF
    }

    .login-list .login-wrap .div-msg-code {
      height: 52px
    }

    .login-list .login-wrap .div-msg-code .msg-code {
      width: 174px;
      float: left;
      padding: 0 12px
    }

    .login-list .login-wrap .div-msg-code a.btn-msg-code {
      margin-top: 10px;
      width: 150px;
      float: right;
      border: 0;
      height: 52px;
      padding: 0;
      text-align: center;
      line-height: 52px;
      color: #fff
    }

    .login-list .login-wrap .div-msg-code a.disable {
      background: #BFD7FF
    }

    .login-list .contact-way-panel h3 {
      font-size: 20px;
      margin-bottom: 30px;
      text-align: center
    }

    .login-list .contact-way-panel p {
      margin-bottom: 20px
    }

    .login-list .contact-way-panel span {
      color: #839096;
      font-size: 14px
    }

    .login-list input {
      margin: 10px 0;
      width: 318px;
      height: 52px;
      line-height: 42px;
      padding: 0 20px;
      border: 1px solid #DEE6EE;
      border-radius: 0;
      color: #8d8377;
      background-color: #fff
    }

    .login-list .div-btn {
      margin-top: 40px
    }

    .login-list .div-btn .btn {
      display: inline-block;
      border-radius: 2px;
      height: 52px;
      width: 320px;
      line-height: 52px;
      text-align: center;
      border: 0;
      color: #fff;
      font-size: 16px;
      background-color: #448cff;
      text-decoration: none;
    }

    .logo {
      display: block;
      width: 335px;
      height: 34px;
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 50%;
      margin: -286px -193px 0;
      font-size: 30px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
    }

    .login_foot {
      font-size: 12px;
      text-align: center;
      position: fixed;
      bottom: 15px;
      width: 100%;
      color: #fff
    }

  </style>
