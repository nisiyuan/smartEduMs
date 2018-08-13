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
             <a href="javascript:;" class="btn confirm">确定</a>
             <a href="javascript:;" class="btn cancel">取消</a>
         </div>
     </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "modal",
  data() {
  },
  computed: {
  },
  methods: {
    close(){
        
    }
  },
  mounted() {
  },
  watch: {
  }
};
</script>
<style scoped>
.modal{
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,.3);
    z-index: 200;
}
.modal .dialog{
    width:420px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #e0e0e0;
    }
 .modal .dialog .header{
    height: 40px;
    background: #f8fafb;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #e0e0e0;
}
 .modal .dialog .header .close-btn{
     font-size: 14px;
     color: #666666;
     display: block;
     float:right;
     color: #999999;
     text-decoration: none;
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
    padding: 20px;
    box-sizing: border-box;
}
.modal .dialog .opt-bar {
    text-align: right;
    padding-right: 20px;
}
.modal .dialog .opt-bar .btn{
    border-color: #448cff;
    color: #fff;
    background-color: #448cff;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 2px;
    font-size: 14px;
    text-decoration: none;
}
.modal .dialog .opt-bar .confirm{
    border-color: #448cff;
}
.modal .dialog .opt-bar .cancel{
    border-color: #dee6ee;
    margin-left: 10px;
}


</style>






