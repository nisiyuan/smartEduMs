<template>                    
<div class="home-right-wrap fr">
      <course v-show="section==0"></course>
      <teacher v-show="section==1"></teacher>
      <student v-show="section==2"></student>
      <score v-show="section==3"></score>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import course from "./course/course"
import score from "./score/score"
import student from "./student/student"
import teacher from "./teacher/teacher"


export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
      opened:false
    };
  },
  computed: {
    ...mapGetters({
     section:"getSection"
    })
  },
  components:{
      course,
      score,
      student,
      teacher
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

































