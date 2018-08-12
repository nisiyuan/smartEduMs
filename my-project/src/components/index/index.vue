<template>
<div>
<div  class="index" >
     <div class="page-main-header" id="page-main-header">
           <header>
               <a href="/" class="logo">智慧教育培训管理系统</a>
       	        <div class="page-user-center">
                      <a class="logout" href="javascipt:;"><i class="mr-5"></i>退出</a>        
                </div>
          </header>    
     </div>
        <div class="page-main-content has-header" id="page-main-content">
            <div class="home-content">
                 <tree></tree>
                 <maincontent></maincontent>  
                <div style="clear: both;"></div>
            </div>
        </div> 
    <div class="page-footer">       
         <footer>
	         <p class="f-normal">本站所有资源均来自用户分享或战略合作平台流转而来，版权归原作者所有，如有侵犯版权，请立刻和本站联系并提供证据，本站将在三个工作日内处理。</p>
         </footer>
    </div>  
    <modal></modal>
</div>
 <!-- v-if="userType!=null"
<div v-else class="nologin">
   错误的页面！！！！！！！T！！！！！！
</div> 
  -->

</div>

</template>

<script>
import { mapGetters } from "vuex";
import tree from"./tree/tree.vue";
import maincontent from "./maincontent/maincontent";
import modal from "./modal/modal";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
      opened:false,
      param:{title:"fdsfsa",content:"fdsfsa",confirmBtn:"fdsfs",cancelBtn:"dsafa",type:""}
    };
  },
  computed: {
    ...mapGetters({
      showWrongMsg: "getShowWrongMsg",
      wrongMsg: "getWrongMsg",
      userType: "getUserType"
    })
  },
  components:{
   tree,
   maincontent,
   modal
  },
  methods: {
    openTree(){
      this.opened=!this.opened;
    },
    test(data) {
      var sendData = {
        user_id: data
      };
      this.$store.dispatch("getUserName", sendData);
    },

    click() {
      this.userName = this.$refs.username.value.trim();
      this.passWord = this.$refs.password.value.trim();
      if (this.userName == "" || this.passWord == "") {
        this.$store.dispatch("changeSetWrongMsg", "用户名或密码不能为空");
        this.$store.dispatch("changeShowWrongMsg", true);
        return;
      }
      var sendData = {
        user_name: this.userName,
        password: this.passWord
      };
      this.$store.dispatch("userLogin", sendData);
    },
    //错误信息展示3秒
    restState() {
      setTimeout(() => {
        this.$store.dispatch("changeShowWrongMsg", false);
      }, 3000);
    }
  },
  mounted() {},
  watch: {
    showWrongMsg: "restState"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  height: 100%
}
.fl{
  float: left;
}
.fr{
  float:right
}
.page-main-content.has-header {
  min-height: calc(100% - 201px);
}
.page-main-content.no-header {
  min-height: calc(100% - 101px);
}
.page-main-content .page-content.header-fixed {
  margin-top: 70px;
}
.page-main-content .page-main-wrap {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.page-main-header header{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    background: #448cff;
    position: relative;
}
.logo{
    /* display: inline-block; */
    width: 325px;
    height: 40px;
    margin-top: 32px;
    float: left;
    text-decoration: none;
    font-size: 30px;
    color: #ffffff;
    padding-left: 40px;
}
.page-main-header header .page-user-center .logout {
    font-size: 20px;
    line-height: 24px;
    color: #fff;
}
.page-main-header header .page-user-center {
    float: right;
    color: #fff;
    height: 100px;
    line-height: 100px;
    font-size: 14px;
    padding: 0 20px;
}
.page-main-header header .page-user-center .logout i {
    width: 22px;
    height: 22px;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-right:5px;
    /* background-image: url("../../../static/images/login/logout.png"); */
}
.page-line {
  overflow: hidden;
}
.page-footer {
  width: 100%;
  min-width: 1200px;
  height: 60px;
  border-top: 1px solid #ecf0f5;
  background: #ecf0f5;
  margin-top: 20px;
}
.page-footer footer {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: #839096;
  text-align: center;
}
.page-footer footer .f-normal {
  padding-top: 20px;
}

.page-main-content {
  position: relative;
}
.home-content {
  width: 1200px;
  margin: 20px auto;
  background-color: #fbfbfc;
}
.home-content img {
  display: -moz-inline-box;
  -moz-box-orient: vertical;
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
}
.home-content .home-left-wrap {
  width: 260px;
  padding: 50px 30px;
  height:100%;
}
.home-content .home-left-wrap img {
  width: 66px;
  height: 66px;
  border-radius: 45px;
  margin-left: 145px;
  border: 2px solid #547ef5;
}
.home-content .home-left-wrap h2 {
  font-size: 20px;
  text-align: center;
  margin: 20px auto;
}
.home-content .home-left-wrap .self-info {
  padding: 20px;
  border: 1px solid #ededf0;
  background-color: #fff;
}
.home-content .home-left-wrap .self-info .amend-contact {
  margin-bottom: 2px;
}
.home-content .home-left-wrap .self-info h3 {
  font-size: 16px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid #ededf0;
  margin-bottom: 30px;
}
.home-content .home-left-wrap .self-info table tbody {
  font-size: 16px;
  line-height: 32px;
}
.home-content .home-left-wrap .self-info table tbody tr {
  vertical-align: top;
}
.home-content .home-left-wrap .self-info table tbody tr th {
  color: #839096;
  text-align: right;
  width: 120px;
  display: inline-block;
  font-weight: 400;
}
.home-content .home-left-wrap .self-info table tbody tr td {
  text-align: left;
  width: 170px;
  display: inline-block;
  margin-left: 20px;
  word-wrap: break-word;
}
.home-content .home-right-wrap {
  width: 850px;
  border: 1px solid #ededf0;
  background-color: #fff;
  height:100%;
  margin-right: 20px;

}
.home-content .home-right-wrap h3 {
  margin-top: 80px;
  margin-left: 35px;
  font-size: 16px;
}
.home-content .home-right-wrap .tea-type-list {
  margin: 10px 25px;
  min-height: 500px;
}
.home-content .home-right-wrap .tea-type-list .type-model {
  margin: 10px;
  float: left;
  border: 1px solid #dee6ee;
  width: 340px;
  height: 340px;
  text-align: center;
  border-radius: 8px;
}
.home-content .home-right-wrap .tea-type-list .type-model img {
  margin: 100px auto 10px;
}
.home-content .home-right-wrap .tea-type-list .type-model p {
  font-size: 20px;
}
.home-content .home-right-wrap .tea-type-list .type-model p:hover {
  color: #448cff;
}
.home-content .home-right-wrap .tea-type-list .type-model:hover {
  color: #383d48;
  border: 1px solid #448cff;
}
.modules-tree{
   border: 1px solid #dedede;
}
.module-item{
  width: 100%;
   height:40px;
   line-height:40px;
   border-bottom: 1px solid #dedede;
   text-align: center;
   font-weight: bold;
   cursor: pointer;
}
.module-item:last-child{
  border-bottom:none;
}
.module-item.course{
  height:auto;
}
.module-item.course .arrow{
  /* display: inline-block; */
  vertical-align: middle;
  padding-right: 20px;
    float: right;
    font-size: 20px;
}

.module-item.course .arrow-down{
  display: inline-block;
}
.module-item.course .arrow-up{
  display:none;
}

.module-item.course.opened .arrow-up{
  display: inline-block;
}
.module-item.course.opened .arrow-down{
  display:none;
}

.module-item.course .tree-item{
   box-sizing: border-box;
   padding-left:35px;
}

.module-item.course.opened .tree-item{
border-bottom: 1px solid #dedede;
}

.module-item.course .course-list{
 display: none;
}
.module-item.course.opened .course-list{
  display: block;
}
.course-item{
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  background-color:#e6e9f1;
  border-bottom: 1px solid #dedede;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}
.course-item.selected{
  background: #448cff;
}

.course-item:last-child{
  border-bottom:none;
}
.course-item.addcourse{
  font-size: 16px;
  font-weight: bold;
  background: #547ef5;
  text-align: center;
  padding-left: 0;
}

.course-item .opt-bar{
  /* display: inline-block; */
  margin-right: 10px;
  float: right;
}
.course-item .opt-bar .btn {
   display: inline-block;
   font-size: 14px;
   text-decoration: underline;
   margin-right: 5px;

}
.course-item .opt-bar .btn.update {
  float: left;
}
.course-item .opt-bar .btn.delete {
 float: right
}

.home-right-wrap .right-content {
  min-height: 600px;
}
.home-right-wrap .con-header {
 height:50px;
 line-height: 50px;
 padding: 0 20px;
 font-size: 24px;
 font-weight:bold;
 background: #448cff;
 color: #fff;
}
.home-right-wrap .con-header .opt-bar{
  /* display: inline-block; */
  float: right;
  font-size: 16px;
  text-decoration: underline;
  cursor:pointer;
}
.home-right-wrap .con-header .opt-bar:hover{
   color: -webkit-link;
}

.home-right-wrap .right-content .con-list{
  margin-top: 10px;
}
.home-right-wrap .right-content .con-list .item{
  height: 35px;
  line-height: 35px;
  margin: 0 10px;
  padding: 0 20px 0 5px;
  border-bottom: 1px solid #dedede;
}
.item .index{
    margin-right: 20px
}
.item:last-child{
    border-bottom: none;
}
.item span{
display: inline-block;
vertical-align: middle;
}
.home-right-wrap .right-content.course-detail{
  /* display: none */
}
.home-right-wrap .right-content .con-list .opt-bar {
 float: right;
}
.home-right-wrap .right-content .con-list .show-detail {
 color: #333333;
}
.home-right-wrap .right-content .con-list .show-detail:hover  {
 color: -webkit-link;
}

.home-right-wrap .right-content .con-list .btn {
 margin-right: 10px;
 cursor: pointer;
 text-decoration: underline;
}
.home-right-wrap .right-content .con-list .btn:hover{
   color: -webkit-link;
}
.home-right-wrap  .teacher-detail{
  /* display: none; */
}
.home-right-wrap  .teacher-detail span{
  display: inline-block;
}
.home-right-wrap  .teacher-detail .index{
  width: 50px;
  text-align: center
}
.home-right-wrap  .teacher-detail .info {
   width: 120px;
   text-align: center;
   margin-left: 20px
}
.home-right-wrap .right-content .sub-header{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dedede;
}
.home-right-wrap .right-content .sub-header .ind{
  width: 40px;
  text-align: center;
}
.home-right-wrap  .stu-detail {
  /* display: none; */
}
.home-right-wrap  .score-detail {
  display:block;
}
</style>
































