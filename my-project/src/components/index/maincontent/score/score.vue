<template>
  <div class="right-content teacher-detail score-detail">
                      <div class="con-header">成绩列表<span class="opt-bar add-teacher"  @click="addCourse" >添加学员成绩</span></div>
                         <div class="sub-header">
                          <span class="info ind">序号</span>
                          <span class="info name">姓名</span>
                          <span class="info zone">校区</span>
                          <span class="info acc">账号</span>
                          <span class="info tel">成绩/分</span>
                         </div>
                      <ul  v-if="list.length" class="con-list teacher-list">
                        <li v-for="(item,index) in list" :key="item.id" class="item teacher">

                          <span class="index">{{index+1}}</span>
                          <span class="info name">{{item.name}}</span>
                          <span class="info schoole">{{item.school}}</span>
                          <span class="info account">{{item.account}}</span>
                          <span class="info contact">{{item.score}}</span>
                
                          <span class="opt-bar">
                            <span class="btn update" @click="updateCourse(item)">修改</span>
                            <span class="btn delete" @click="deleteCourse(item)">删除</span>
                          </span>
                        </li>   
                      </ul>
                       <div v-if="!list.length" class="emptypage">
                          没有相关信息~
                      </div>

                      
                      <modal  extraClass="teacherDlg" :show="showAdd" :closeCb="this.closeCb" :confirmCb="this.confirmCb" :cancelCb="this.cancelCb">
                         <span slot="title">添加培训师</span>
                         <div slot="content">
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

<script>
import { mapGetters } from "vuex";
import modal from "../../modal/modal";


export default {
  name: "score",
  data() {
    return {
     showAdd:false,
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
  computed: {
    ...mapGetters({
      list:"getSectionData"
    })
  },
  components:{
    modal
  },
  methods: {
    addCourse(){
        this.showAdd=true;
        this.$refs.name.value="";
        this.$refs.zone.value="";
        this.$refs.tel.value="";
        this.$refs.score.value="";
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






