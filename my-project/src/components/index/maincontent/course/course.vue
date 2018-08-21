<template>
  <div class="right-content course-detail">
                      <div class="con-header">课程详情 <span class="opt-bar add-course">添加简答题</span><span class="opt-bar add-course">添加选择题</span></div>
                      <ul v-if="list.length" class="con-list test-list">
                        <li v-for="(item,index) in list" :key="item.id" class="item test">
                          <a href="javascript:;" class="show-detail">
                             <span class="index">{{index+1}}</span><span class="title">{{item.body}}</span>
                          </a>
                          <span class="opt-bar">
                            <span class="btn update">修改</span>
                            <span class="btn delete">删除</span>
                          </span>
                        </li>
                      </ul>
                      <div v-else class="no-question">
                          没有题目，点击右上角，添加题目~
                      </div>
                      
                      <modal  extraClass="teacherDlg" :show="showAddAns" :closeCb="this.closeCb" :confirmCb="this.confirmCb" :cancelCb="this.cancelCb">
                         <span slot="title">添加简单题</span>
                         <div slot="content">
                           
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="nameTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入答案"></textarea>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>

                      <modal  extraClass="teacherDlg" :show="showUpdateAns" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
                         <span slot="title">修改简答题</span>
                         <div slot="content">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="nameTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入答案"></textarea>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>

                     
                      <modal  extraClass="teacherDlg  opt-question-wrap" :show="showAddOpt" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
                         <span slot="title">添加选择题</span>
                         <div slot="content" class="dlg-real-body">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="nameTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">选项:</span>
                                  <ul class="options">
                                      <li class="option">
                                          <span>A:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>B:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>C:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>D:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                  </ul>
                             </div>

                            <div class="add-name opt-answer">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入答案"></textarea>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>
                     

                     
                      <modal  extraClass="teacherDlg opt-question-wrap" :show="showUpdateAns" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
                         <span slot="title">修改选择题</span>
                         <div slot="content">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="nameTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">选项:</span>
                                  <ul class="options">
                                      <li class="option">
                                          <span>A:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>B:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>C:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>D:</span>
                                          <textarea type="text" class="name" ref="name" placeholder="请输入选项"></textarea>
                                      </li>
                                  </ul>
                             </div>
                             <div class="add-name opt-answer update">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入答案"></textarea>
                             </div>
                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="name" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>




                      <modal  extraClass="treeDlg delete" :show="showDelete" :closeCb="this.closeDCb" :confirmCb="this.confirmDCb" :cancelCb="this.cancelDCb">
                         <span slot="title">删除成绩</span>
                         <div slot="content">
                             确定删除该条成绩？
                         </div>
                     </modal>

 </div>
</template>


<style scoped>
.opt-bar{
    margin-left: 20px;
}
.sec{
  float:right;
}
.answer{
   margin-left: 20px;
}
 .type-choose{
     margin-bottom: 20px;
     overflow: hidden;
 }
 .btn {
    border:1px solid #448cff; 
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    font-size: 14px;
    text-decoration: none;
}
.btn.cur{
  color: #fff;
 background-color: #448cff;
}
.add-name .static-tip{
    display: block;
    margin: 0;
}
.add-name .name{
    width: 375px;
    height: 100px;
}
.add-name .options .option{
    margin-bottom: 5px;
}
.add-name .options .option .name{
    width: 357px;
    height: 40px;
    vertical-align: middle;
}
.add-name .options .option span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
}
.opt-question-wrap .dialog{
    width: 450px;
}
.opt-question-wrap .dlg-real-body{
    height: 400px !important;
    overflow-y: scroll;
}
.add-name .opt-answer .name{
    height: 20px !important;
}
</style>




<script>
import { mapGetters } from "vuex";
import modal from "../../modal/modal";


export default {
  name: "course",
  data() {
    return {
     showAddAns:false,
     showAddOpt:true,
     nameTip:false,
     zoneTip:false,
     accountTip:false,
     tellTip:false,
     scoreTip:false,
     showUpdateAns:false,
     showUpdateOpt:false,
     showDelete:false,
     curTeacherId:"",
     curTeacher:null
    };
  },
  components:{
    modal
  },
  computed: {
    ...mapGetters({
      list: "getQuestionList"
    })
  },
  methods: {
    addCourse(){
        this.showAdd=true;
    },
    closeCb(){
      this.clearUpdDlg()
    },
    confirmCb(){
        const name=this.$refs.name.value.trim();
        const zone=this.$refs.zone.value.trim();
        const tel=this.$refs.tel.value.trim();
        const score=this.$refs.score.value.trim();

        this.nameTip=!name;
        this.zoneTip=!zone;
        this.tellTip=!tel;
        this.scoreTip=!score;
        if((this.nameTip||this.zoneTip||this.tellTip||this.scoreTip)){
           return
        }else{
            let param={
                name:name,
                school:zone,
                account:tel,
                score:score
            }
            this.$store.dispatch("addScore",param)
        } 
       this.clearADlg();
    },
    cancelCb(){
      this.clearUpdDlg()
    },
    clearADlg(){
        this.showAdd=false;
        this.showUpdate=false;
        this.showDelete=false;
        this.nameTip=false;
        this.zoneTip=false;
        this.tellTip=false;
        this.scoreTip=false;
    },
    updateCourse(item){
        this.showUpdate=true;
        this.curTeacherId=item.id;
        this.curTeacher=item;
        // 信息回填
        this.$refs.nameN.value=item.name;
        this.$refs.zoneN.value=item.school;
        this.$refs.telN.value=item.account;
        this.$refs.scoreN.value=item.score;
    },
    closeUCb(){
       this.clearUpdDlg();
    },
    confirmUCb(){
        const name=this.$refs.nameN.value.trim();
        const zone=this.$refs.zoneN.value.trim();
        const tel=this.$refs.telN.value.trim();
        const score=this.$refs.scoreN.value.trim();

        this.nameTip=!name;
        this.zoneTip=!zone;
        this.tellTip=!tel;
        this.scoreTip=!score;
        if((this.nameTip||this.zoneTip||this.tellTip||this.scoreTip)){
           return
        }else{
            let param={
                id:this.curTeacherId,
                name:name,
                school:zone,
                account:tel,
                score:score
            }
            this.$store.dispatch("updScore",param)
        }
        this.clearUpdDlg();
    },
    cancelUCb(){
     this.clearUpdDlg();
    },
    clearUpdDlg(){
      this.showUpdate=false;  
      this.showAdd=false;
      this.showDelete=false;
      this.nameTip=false;
      this.zoneTip=false;
      this.telTip=false;
      this.curTeacherId="";
      this.curTeacher="";
    }
    ,
    deleteCourse(item){
        this.showDelete=true;
        this.curTeacherId=item.id;
    },
    closeDCb(){
         this.showDelete=false;  
         this.curTeacherId="";
    },
    confirmDCb(){
         this.$store.dispatch("deleScore",{id:this.curTeacherId});
         this.showDelete=false;
    },
    cancelDCb(){
      this.showDelete=false;
      this.curTeacherId="";
    }
  },
  mounted() {},
  watch: {
    showWrongMsg: "restState"
  }
};
</script>




























