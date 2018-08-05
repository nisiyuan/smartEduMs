<template>
  <div class="right-content course-detail">
                      <div class="con-header">课程详情 <span class="opt-bar add-course">添加题目</span></div>
                      <ul class="con-list test-list">
                        <li class="item test">
                          <a href="javascript:;" class="show-detail">
                          <span class="index">1</span><span class="title">如何登陆教师空间个人体积</span>
                          </a>
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
  name: "course",
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




























