<template>
     <div class="right-content teacher-detail stu-detail">
                      <div class="con-header">学员列表<span class="opt-bar add-teacher"  @click="addCourse">添加学员</span></div>
                       <div class="sub-header">
                          <span class="info ind">序号</span>
                          <span class="info name">姓名</span>
                          <span class="info zone">校区</span>
                          <span class="info acc">账号</span>
                          <span class="info tel">联系方式</span>
                         </div>

                      <ul v-if="list.length" class="con-list teacher-list">
                        <li v-for="(item,index) in list" :key="item.id" class="item teacher">
                        
                          <span class="index">{{index+1}}</span>
                          <span class="info name">{{item.name}}</span>
                          <span class="info schoole">{{item.school}}</span>
                          <span class="info account">{{item.id}}</span>
                          <span class="info contact">{{item.contact}}</span>
                
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
                         <span slot="title" >添加学生</span>
                         <div slot="content">
                             <div class="add-name">
                             <span class="static-tip">姓名:</span><input type="text" class="name" ref="name" placeholder="请输入课程名">
                            
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
                              <span class="static-tip">电话:</span><input type="text" class="name" ref="tel" placeholder="请输入电话">
                              <div class="tip" v-show="tellTip">
                                 <span class="tip-info">电话不能为空！</span>
                             </div>
                            </div>
                         </div>
                      </modal>

                      <modal  extraClass="teacherDlg" :show="showUpdate" :closeCb="this.closeUCb" :confirmCb="this.confirmUCb" :cancelCb="this.cancelUCb">
                         <span slot="title">信息修改</span>
                        <div slot="content">
                             <div class="add-name">
                             <span class="static-tip">姓名:</span><input type="text" class="name" ref="nameN" placeholder="请输入课程名">
                            
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
                              <span class="static-tip">电话:</span><input type="text" class="name" ref="telN" placeholder="请输入电话">
                              <div class="tip" v-show="tellTip">
                                 <span class="tip-info">电话不能为空！</span>
                              </div>
                            </div>
                        </div>   
                      </modal>

                      <modal  extraClass="treeDlg delete" :show="showDelete" :closeCb="this.closeDCb" :confirmCb="this.confirmDCb" :cancelCb="this.cancelDCb">
                         <span slot="title">删除学员</span>
                         <div slot="content">
                             确定删除该学员？
                         </div>
                      </modal>

    </div> 
</template>

<script>
import { mapGetters } from "vuex";
import modal from "../../modal/modal";

export default {
  name: "student",
  data() {
    return {
     showAdd:false,
     nameTip:false,
     zoneTip:false,
     accountTip:false,
     tellTip:false,
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
    },
    closeCb(){
      this.clearUpdDlg()
    },
    confirmCb(){
        const name=this.$refs.name.value.trim();
        const zone=this.$refs.zone.value.trim();
        const tel=this.$refs.tel.value.trim();
        this.nameTip=!name;
        this.zoneTip=!zone;
        this.tellTip=!tel;
        if((this.nameTip||this.zoneTip||this.tellTip)){
           return
        }else{
            let param={
                name:name,
                school:zone,
                contact:tel
            }
            this.$store.dispatch("addStu",param);
             this.showAdd=false;
        } 
    },
    cancelCb(){
      this.clearUpdDlg()
    },
    updateCourse(item){
        this.showUpdate=true;
        this.curTeacherId=item.id;
        this.curTeacher=item;
        // 信息回填
        this.$refs.nameN.value=item.name;
        this.$refs.zoneN.value=item.school;
        this.$refs.telN.value=item.contact;
    },
    closeUCb(){
       this.clearUpdDlg();
    },
    confirmUCb(){
        const name=this.$refs.nameN.value.trim();
        const zone=this.$refs.zoneN.value.trim();
        const tel=this.$refs.telN.value.trim();
        this.nameTip=!name;
        this.zoneTip=!zone;
        this.tellTip=!tel;
        if((this.nameTip||this.zoneTip||this.tellTip)){
           return
        }else{
            let param={
                id:this.curTeacherId,
                name:name,
                school:zone,
                contact:tel
            }
            this.$store.dispatch("updStu",param)
        }
        this.clearUpdDlg();
    },
    cancelUCb(){
     this.clearUpdDlg();
    },
    clearUpdDlg(){
      this.showUpdate=false;  
      this.showDelete=false;
      this.showAdd=false;
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
         this.clearUpdDlg();
         this.curTeacherId="";
    },
    confirmDCb(){
        this.$store.dispatch("deleStu",{id:this.curTeacherId});
        this.clearUpdDlg();
   },
    cancelDCb(){
      this.clearUpdDlg();
      this.curTeacherId=""
    }
  },
  mounted() {},
  watch: {
    showWrongMsg: "restState"
  }
};
</script>
































