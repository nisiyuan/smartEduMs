<template>
  <div class="right-content course-detail">
                      <div class="con-header">课程详情 <span class="opt-bar add-course" @click="addAnsQue">添加简答题</span><span class="opt-bar add-course" @click="addOptQue">添加选择题</span></div>
                      <ul v-if="list.length" class="con-list test-list">
                        <li v-for="(item,index) in list" :key="item.id" class="item test" >
                          <a href="javascript:;" class="show-detail" @click="showOptDetailDlg(item)">
                             <span class="index">{{index+1}}</span><span class="type" style="font-size:12px; margin-right:20px;color:rgb(14, 25, 202);">{{item.type==2?"简答题":"选择题"}}</span><span class="title">{{item.body}}</span>
                          </a>
                          <span class="opt-bar">
                            <span class="btn update" @click="updateQuestion(item)" >修改</span>
                            <span class="btn delete" @click="deleteQuestion(item.id)">删除</span>
                          </span>
                        </li>
                      </ul>
                      <div v-else class="no-question" style="text-align:center;margin-top:290px;">
                          没有题目，点击右上角，添加题目~
                      </div>



                      
                      <!-- 添加简单题 -->
                      <modal  extraClass="teacherDlg" :show="showAddAns" :closeCb="this.cancelAddAns" :confirmCb="this.confirmAddAns" :cancelCb="this.cancelAddAns">
                         <span slot="title" ref="optTitle">添加简答题</span>
                         <div slot="content">
                           
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="ansbody" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="ansBodyTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="ansans" placeholder="请输入答案"></textarea>
                                  <div class="tip" v-show="ansAnsTip">
                                     <span class="tip-info">答案不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="ansany" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                      </modal>

                      <!-- 修改简单题 -->
                      <modal  extraClass="teacherDlg" :show="showUpdAns" :closeCb="this.cancelUpdAns" :confirmCb="this.confirmUpdAns" :cancelCb="this.cancelUpdAns">
                         <span slot="title" ref="optTitle">修改简答题</span>
                         <div slot="content">
                           
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <textarea type="text" class="name" ref="ansbodyU" placeholder="请输入题干"></textarea>
                            
                                  <div class="tip" v-show="ansBodyTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">答案:</span>
                                  <textarea type="text" class="name" ref="ansansU" placeholder="请输入答案"></textarea>
                                  <div class="tip" v-show="ansAnsTip">
                                     <span class="tip-info">答案不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-analysisU">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="ansanyU" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                      </modal>

                      <!-- <modal  extraClass="teacherDlg" :show="showUpdateAns" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
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
                     </modal> -->
                     
                      <!-- 简答题详情 -->
                      <modal  extraClass="teacherDlg" :show="showUpdAnsDtl" :closeCb="this.cancelOptDtl" :confirmCb="this.cancelOptDtl" :cancelCb="this.cancelOptDtl">
                         <span slot="title" ref="optTitle">简答题详情</span>
                         <div slot="content">
                           
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:</span>
                                  <div  type="text" class="name" style="height:auto" ref="ansbodyUDtl" placeholder="请输入题干"></div>
                            
                                  <div class="tip" v-show="ansBodyTip">
                                     <span class="tip-info">题干不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">答案:</span>
                                  <div  type="text" style="height:auto" class="name" ref="ansansUDtl" placeholder="请输入答案"></div >
                                  <div class="tip" v-show="ansAnsTip">
                                     <span class="tip-info">答案不能为空！</span>
                                  </div>
                             </div>

                              <div class="add-name ans-analysisU">
                                  <span class="static-tip">解析:</span>
                                  <div style="height:auto" type="text" class="name" ref="ansanyUDtl" placeholder="请输入解析"></div >
                             </div>
                         </div>
                      </modal>


                     <!-- 添加选择题 -->
                      <modal  extraClass="teacherDlg  opt-question-wrap" id="opt-question-wrap" :show="showAddOpt" :closeCb="this.cancelAddOpt" :confirmCb="this.confirmAddOpt" :cancelCb="this.cancelAddOpt">
                         <span slot="title">添加选择题</span>
                         <div slot="content" class="dlg-real-body">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:  
                                      <div class="tip ans-tip" v-show="optBodyTip">
                                        <span class="tip-info">题干不能为空！</span>
                                      </div>
                                  </span>
                                  <textarea type="text" class="name" ref="optBody" placeholder="请输入题干"></textarea>
                            
                                
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">选项:
                                      <div class="tip ans-tip" v-show="optOptTip">
                                        <span class="tip-info ">选项不能为空！</span>
                                      </div>
                                  </span>
                                  <ul class="options" ref="optList">
                                      <li class="option">
                                          <span>A:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>B:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>C:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>D:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                  </ul>
                             </div>

                            <div class="add-name opt-answer">
                                  <span class="static-tip">答案:
                                      <div class="tip ans-tip" v-show="optResTip">
                                        <span class="tip-info">答案不能为空！</span>
                                      </div>
                                  </span>
                                  <textarea type="text" class="name" ref="result" placeholder="请输入答案"></textarea>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="optAnaly" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>
                     

                    <!--修改選擇題 -->
                     <modal  extraClass="teacherDlg  opt-question-wrap " id="upd-opt-question-wrap" :show="showUpdateOpt" :closeCb="this.cancelUpdAns" :confirmCb="this.confirmUpdAns" :cancelCb="this.cancelUpdAns">
                         <span slot="title">修改选择题</span>
                        <div slot="content" class="dlg-real-body">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干:  
                                      <div class="tip ans-tip" v-show="optBodyTip">
                                        <span class="tip-info">题干不能为空！</span>
                                      </div>
                                  </span>
                                  <textarea type="text" class="name" ref="optBodyU" placeholder="请输入题干"></textarea>
                            
                                
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">选项:
                                      <div class="tip ans-tip" v-show="optOptTip">
                                        <span class="tip-info ">选项不能为空！</span>
                                      </div>
                                  </span>
                                  <ul class="options" ref="optListU">
                                      <li class="option">
                                          <span>A:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>B:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>C:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                       <li class="option">
                                          <span>D:</span>
                                          <textarea type="text" class="name"  placeholder="请输入选项"></textarea>
                                      </li>
                                  </ul>
                             </div>

                            <div class="add-name opt-answer">
                                  <span class="static-tip">答案:
                                      <div class="tip ans-tip" v-show="optResTip">
                                        <span class="tip-info">答案不能为空！</span>
                                      </div>
                                  </span>
                                  <textarea type="text" class="name" ref="resultU" placeholder="请输入答案"></textarea>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <textarea type="text" class="name" ref="optAnalyU" placeholder="请输入解析"></textarea>
                             </div>
                         </div>
                     </modal>
                     <!--選擇題详情 -->
                     <modal  extraClass="teacherDlg  opt-question-wrap " id="upd-opt-question-wrap" :show="showOptDetail" :closeCb="this.cancelOptDtl" :confirmCb="this.cancelOptDtl" :cancelCb="this.cancelOptDtl">
                         <span slot="title">选择题详情</span>
                        <div slot="content" class="dlg-real-body">
                
                              <div class="add-name ans-body">
                                  <span class="static-tip">题干: </span>
                                  <div  type="text" class="name" ref="optBodyDtl" style="height:auto"></div>
                             </div>

                              <div class="add-name ans-answer">
                                  <span class="static-tip">选项:</span>
                                  <ul class="options" ref="optListDtl">
                                      <li class="option">
                                          <span>A:</span>
                                          <div type="text" class="name" style="height:auto"></div>
                                      </li>
                                       <li class="option">
                                          <span>B:</span>
                                          <div type="text" class="name" style="height:auto"></div>
                                      </li>
                                       <li class="option">
                                          <span>C:</span>
                                          <div type="text" class="name" style="height:auto"></div>
                                      </li>
                                       <li class="option">
                                          <span>D:</span>
                                          <div type="text" class="name" style="height:auto"></div>
                                      </li>
                                  </ul>
                             </div>

                            <div class="add-name opt-answer">
                                  <span class="static-tip">答案:</span>
                                  <div type="text" class="name" ref="resultDtl" style="height:auto"></div>
                             </div>

                              <div class="add-name ans-analysis">
                                  <span class="static-tip">解析:</span>
                                  <div type="text" class="name" ref="optAnalyDtl" style="height:auto"></div>
                             </div>
                         </div>
                     </modal>

                      <modal  extraClass="treeDlg delete" :show="showDelete" :closeCb="this.closeDCb" :confirmCb="this.confirmDCb" :cancelCb="this.cancelDCb">
                         <span slot="title">删除題目</span>
                         <div slot="content">
                             确定删除该題目？
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
#opt-question-wrap {
    /* background: red; */
}
.opt-question-wrap .dialog{
    width: 470px !important;
}
.opt-question-wrap .dlg-real-body{
    height: 400px !important;
    overflow-y: scroll;
}
.add-name .opt-answer .name{
    height: 20px !important;
}
.ans-tip{
    margin:0 !important;
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
     showAddOpt:false,
     ansBodyTip:false,
     ansAnsTip:false,

     optBodyTip:false,
     optOptTip:false,
     optResTip:false,
     
     showDelete:false,
     curQueId:"",

     showUpdAns:false,
     queType:"",
     showUpdateOpt:false,

     showOptDetail:false,

     showUpdAnsDtl:false,



     nameTip:false,
     zoneTip:false,
     accountTip:false,
     tellTip:false,
     scoreTip:false,
     showUpdateAns:false,
     showUpdateOpt:false,
    
     curTeacherId:"",
     curTeacher:null
    };
  },
  components:{
    modal
  },
  computed: {
    ...mapGetters({
      list: "getQuestionList",
      curCourseId:"getCurCourseId"
    })
  },
  methods: {
    // 添加简答题  
    addAnsQue(){
        this.showAddAns=true;
        this.$refs.ansbody.value="";   
        this.$refs.ansans.value="";
        this.$refs.ansany.value="";  
    },
    confirmAddAns(){
        let body=this.$refs.ansbody.value;   
        let answer=this.$refs.ansans.value;
        let analysis=this.$refs.ansany.value;   
        
        this.ansBodyTip=!body;
        this.ansAnsTip=!answer;
        
        if(this.ansBodyTip||this.ansAnsTip){
            return;
        }else{
              let param={
                  body:body,
                  answer:answer,
                  analysis:analysis,
                  courseId:this.curCourseId,
                  type:2
              }   
             this.$store.dispatch("addQuestion",param)
        }
 
        this.showAddAns=false;
    },
     cancelAddAns(){
        this.showAddAns=false;
    },
    // 添加选择题
    addOptQue(){
        this.showAddOpt=true;

        this.$refs.optBody.value="";  
        let opt=this.$refs.optList.getElementsByClassName("option");
        this.$refs.result.value="";   
        this.$refs.optAnaly.value="";
         for(let i=0;i<opt.length;i++){
         opt[i].getElementsByClassName("name")[0].value="";
        
     }

    },
    getOptFlag(opt){
     let flag=true;    
     for(let i=0;i<opt.length;i++){
         let cur=opt[i].getElementsByClassName("name")[0];
         if(!cur.value){
             flag=false;
             break;
         }
     }
     return flag;
    },
    getOptStr(opt){
        let str=[];
     for(let i=0;i<opt.length;i++){
         let cur=opt[i].getElementsByClassName("name")[0].value;
         str.push(cur);
     }
     return str.join("_");
    },
    confirmAddOpt(){
        let body=this.$refs.optBody.value;  
        let opt=this.$refs.optList.getElementsByClassName("option");
        let res=this.$refs.result.value;   
        let analysis=this.$refs.optAnaly.value;
        
        this.optBodyTip=!body;
        this.optOptTip=!this.getOptFlag(opt);
        this.optResTip=!res;
        if(this.optBodyTip||this.optOptTip||this.optResTip){
            return;
        }else{
              let param={
                  body:body,
                  opt:this.getOptStr(opt),
                  answer:res,
                  analysis:analysis,
                  courseId:this.curCourseId,
                  type:1
              }   
             this.$store.dispatch("addQuestion",param)
        }
 
        this.showAddOpt=false;
    },
     cancelAddOpt(){
        this.showAddOpt=false;
    },

    //刪除題目
    deleteQuestion(id){
      this.showDelete=true;
      this.curQueId=id;
    },

    // 修改題目
    updateQuestion(item){
     this.queType=item.type;
     this.curQueId=item.id;
     if(item.type==2){
         this.showUpdAns=true;
        //  簡答題信息回填
         this.$refs.ansbodyU.value=item.body;
         this.$refs.ansansU.value=item.answer;
         this.$refs.ansanyU.value=item.analysis;
     }else{
         this.showUpdateOpt=true;
        //  選擇題信息回填
       this.$refs.optBodyU.value=item.body
       let options=this.$refs.optListU.getElementsByClassName("option");
       let opts=item.options.split("_");

       for(let i=0;i<4;i++){
           options[i].getElementsByClassName("name")[0].value=opts[i];
       }

       this.$refs.resultU.value=item.answer;   
       this.$refs.optAnalyU.value=item.analysis;

     }
    },  
    cancelUpdAns(){
     if(this.queType==2){
         this.showUpdAns=false;
     }else{
         this.showUpdateOpt=false;
     }
    },
    confirmUpdAns(){
        // 2 jiandati 
      if(this.queType==2){
        let body=this.$refs.ansbodyU.value;   
        let answer=this.$refs.ansansU.value;
        let analysis=this.$refs.ansanyU.value;   
        
        this.ansBodyTip=!body;
        this.ansAnsTip=!answer;

        if(this.ansBodyTip||this.ansAnsTip){
            return;
        }else{
              let param={
                  body:body,
                  answer:answer,
                  analysis:analysis,
                  id:this.curQueId,
                  courseId:this.curCourseId,
                  type:1
              }   
             this.$store.dispatch("updQuestion",param);
            this.showUpdAns=false;
        }
    }else{
        let body=this.$refs.optBodyU.value;  
        let opt=this.$refs.optListU.getElementsByClassName("option");
        let res=this.$refs.resultU.value;   
        let analysis=this.$refs.optAnalyU.value;
        
        this.optBodyTip=!body;
        this.optOptTip=!this.getOptFlag(opt);
        this.optResTip=!res;
        if(this.optBodyTip||this.optOptTip||this.optResTip){
            return;
        }else{
              let param={
                  body:body,
                  options:this.getOptStr(opt),
                  answer:res,
                  analysis:analysis,
                  id:this.curQueId,
                  courseId:this.curCourseId,
                  type:2
              }   
             this.$store.dispatch("updQuestion",param)
        }
 
         this.showUpdateOpt=false;
     }
    }, 
    //选择题详情
    showOptDetailDlg(item){
        if(item.type==1){
           this.showOptDetail=true;
           this.$refs.optBodyDtl.innerHTML=item.body;

           let options=this.$refs.optListDtl.getElementsByClassName("option");
           let opts=item.options.split("_");
           for(let i=0;i<4;i++){
           options[i].getElementsByClassName("name")[0].innerHTML=opts[i];
           }

           this.$refs.resultDtl.innerHTML=item.answer.split("_").join(",");
           this.$refs.optAnalyDtl.innerHTML=item.analysis;
        }else{
            this.showUpdAnsDtl=true; 
            this.$refs.ansbodyUDtl.innerHTML=item.body;
            this.$refs.ansansUDtl.innerHTML=item.answer;
            this.$refs.ansanyUDtl.innerHTML=item.analysis;
            
        }
        
    },
    cancelOptDtl(){
       this.showOptDetail=false;
         this.showUpdAnsDtl=false;
    },


    
    closeDCb(){
         this.showDelete=false;  
         this.curQueId="";
    },
    confirmDCb(){
         this.$store.dispatch("delQuestion",{id:this.curQueId,courseId:this.curCourseId});
         this.showDelete=false;
    },
    cancelDCb(){
      this.showDelete=false;
      this.curQueId="";
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
    }
    
  },
  mounted() {},
  watch: {
    showWrongMsg: "restState"
  }
};
</script>




























