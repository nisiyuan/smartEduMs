<template>

                <div class="home-left-wrap fl">
                    <ul class="modules-tree">

                          <li class="module-item course" :class="{opened:opened==true}" > 
                               <div class="tree-item" @click="openTree" >
                                   课程列表 <span class=" arrow arrow-down">&#8744;</span> <span class="arrow arrow-up">&#8743;</span>
                               </div>
                             <ul class="course-list">
                                <li class="course-item selected" >
                                  <span class="name">课程1</span>
                                  <span class="opt-bar"> 
                                    <span class="btn pdate">修改</span>
                                    <span class="btn update">删除</span>
                                    </span>
                                </li>

                                <li class="course-item " >
                                  <span class="name">课程1</span>
                                  <span class="opt-bar"> 
                                    <span class="btn pdate">修改</span>
                                    <span class="btn update">删除</span>
                                    </span>
                                </li>

                                <li class="course-item " >
                                  <span class="name">课程1</span>
                                  <span class="opt-bar"> 
                                    <span class="btn pdate">修改</span>
                                    <span class="btn update">删除</span>
                                    </span>
                                </li>

                                <li class="course-item addcourse">添加课程   +</li>
                            </ul>
                           
                           </li>
                     
                        <li class="module-item">教师管理</li>
                       <li class="module-item">学员管理</li>
                       <li class="module-item">成绩管理</li>
                    </ul>
                </div>
                
               

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "tree",
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
