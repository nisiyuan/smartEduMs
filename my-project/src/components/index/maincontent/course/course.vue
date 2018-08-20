<template>
  <div class="right-content course-detail">
                      <div class="con-header">课程详情 <span class="opt-bar add-course">添加题目</span></div>
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


                   
                      
                      <modal  extraClass="teacherDlg" :show="showAdd" :closeCb="this.closeCb" :confirmCb="this.confirmCb" :cancelCb="this.cancelCb">
                         <span slot="title">添加培训师</span>
                         <div slot="content">
                             <div class="type-choose">
                                 <div class="btn sec answer">简答题</div>
                                 <div class="btn sec choose">选择题</div>
                             </div>
                             <div class="option-question">
                              <div class="add-name">
                             <span class="static-tip">姓名:</span><input type="text" class="name" ref="name" placeholder="请输入姓名">
                            
                             <div class="tip" v-show="nameTip">
                                 <span class="tip-info">姓名不能为空！</span>
                             </div>
                             </div>
            
                             <div class="add-name">
                             <span class="static-tip">校区:</span><input type="text" class="name" ref="zone" placeholder="请输入校区名">
                              <div class="tip" v-show="zoneTip">
                                 <span class="tip-info">校区不能为空！</span>
                             </div>
                             </div>
                            
                              <div class="add-name">
                               <span class="static-tip">账号:</span><input type="text" class="name" ref="tel" placeholder="请输入账号">
                               <div class="tip" v-show="tellTip">
                                 <span class="tip-info">账号不能为空！</span>
                               </div>
                              </div>

                              <div class="add-name">
                               <span class="static-tip">分数:</span><input type="text" class="name" ref="score" placeholder="请输入分数">
                               <div class="tip" v-show="tellTip">
                                 <span class="tip-info">分数不能为空！</span>
                               </div>
                              </div>
                             </div>

                             <div class="answer-question">

                             </div>
                             
                         </div>
                     </modal>

                      <modal  extraClass="teacherDlg" :show="showUpdate" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
                         <span slot="title">信息修改</span>
                         <div slot="content">
                             <div class="add-name">
                             <span class="static-tip">姓名:</span><input type="text" class="name" ref="nameN" placeholder="请输入姓名">
                            
                             <div class="tip" v-show="nameTip">
                                 <span class="tip-info">姓名不能为空！</span>
                             </div>
                             </div>
            
                             <div class="add-name">
                             <span class="static-tip">校区:</span><input type="text" class="name" ref="zoneN" placeholder="请输入校区名">
                              <div class="tip" v-show="zoneTip">
                                 <span class="tip-info">校区不能为空！</span>
                             </div>
                             </div>
                            
                              <div class="add-name">
                               <span class="static-tip">账号:</span><input type="text" class="name" ref="telN" placeholder="请输入账号">
                               <div class="tip" v-show="tellTip">
                                 <span class="tip-info">账号不能为空！</span>
                               </div>
                              </div>

                              <div class="add-name">
                               <span class="static-tip">分数:</span><input type="text" class="name" ref="scoreN" placeholder="请输入分数">
                               <div class="tip" v-show="tellTip">
                                 <span class="tip-info">分数不能为空！</span>
                               </div>
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
</style>




<script>
import { mapGetters } from "vuex";
import modal from "../../modal/modal";


export default {
  name: "course",
  data() {
    return {
     showAdd:true,
     nameTip:false,
     zoneTip:false,
     accountTip:false,
     tellTip:false,
     scoreTip:false,
     showUpdate:false,
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




























