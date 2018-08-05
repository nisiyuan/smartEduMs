<template>
     <div class="right-content teacher-detail stu-detail">
                      <div class="con-header">学员列表<span class="opt-bar add-teacher">添加学员</span></div>
                       <div class="sub-header">
                          <span class="info ind">序号</span>
                          <span class="info name">姓名</span>
                          <span class="info zone">校区</span>
                          <span class="info acc">账号</span>
                          <span class="info tel">联系方式</span>
                         </div>
                      <ul class="con-list teacher-list">
                        <li class="item teacher">
                        
                          <span class="index">1</span>
                          <span class="info name">学员一</span>
                          <span class="info schoole">海淀区八一中学</span>
                          <span class="info account">1533668689</span>
                          <span class="info contact">15176897689</span>
                         
                          <span class="opt-bar">
                            <span class="btn update">修改</span>
                            <span class="btn delete">删除</span>
                          </span>
                        </li>   
                      </ul>
    </div> 
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "student",
  data() {
    return {
      userName: "",
      passWord: "",
      opened:false
    };
  },
  computed: {
    ...mapGetters({
      showWrongMsg: "getShowWrongMsg",
      wrongMsg: "getWrongMsg"
    })
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
































