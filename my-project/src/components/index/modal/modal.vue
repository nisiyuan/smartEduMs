<template>
 <div class="modal" >
     <div class="dialog">
         <div class="header">
             <div class="title"><slot name="title"></slot></div>
             <a href="javascript:;" class="close-btn">关闭</a>
         </div>
         <div class="dlg-body">
             <slot name="content"></slot>
         </div>
         <div class="opt-bar">
             <a href="javascript:;" class="confirm">确定</a>
             <a href="javascript:;" class="cancel">取消</a>
         </div>
     </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "modal",
  data() {
    return {
      userName: "",
      passWord: "",
      opened:false
    };
  },
  computed: {
    ...mapGetters({
      list:"getSectionData"
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
  mounted() {
      
  },
  watch: {
    showWrongMsg: "restState"
  }
};
</script>
<style scoped>
.modal{
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: rgba(0,0,0,.3)
}
.modal .dialog{
    height: 320px;
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #e0e0e0;
    }
 .modal .dialog .header{
    height: 40px;
    margin-bottom: 10px;
    background: #f8fafb;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #e0e0e0;
}
 .modal .dialog .heade .close-btn{
     font-size: 40px;
     color: #666666;
 }
.modal .dialog .opt-bar{
    height: 60px;
    line-height: 60px;
    background: #f8fafb;
    border-top: 1px solid #e0e0e0;
} 
.modal .dialog .dlg-body{
    height: 220px;
    width: 100%;
    background: #ffffff;

}
</style>






