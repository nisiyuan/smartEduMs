<template>

                <div class="home-left-wrap fl">
                    <ul class="modules-tree">

                          <li class="module-item course" :class="{opened:opened}" > 
                               <div class="tree-item" @click="toggleTree" >
                                   课程列表 <span class=" arrow arrow-down">&#8744;</span> <span class="arrow arrow-up">&#8743;</span>
                               </div>
                             <ul class="course-list">
                                <li v-for="(item) in list" :key="item.id" class="course-item">
                                  <span class="name" @click="showCourseDetail(item.id)">{{item.name}}</span>
                                  <span class="opt-bar"> 
                                    <span class="btn pdate">修改</span>
                                    <span class="btn update">删除</span>
                                    </span>
                                </li>
                                <li class="course-item addcourse" @click="this.addCourse">添加课程   +</li>
                            </ul>
                           </li>
                        <li class="module-item" @click="changeSection(1)">教师管理</li>
                       <li class="module-item" @click="changeSection(2)">学员管理</li>
                       <li class="module-item" @click="changeSection(3)">成绩管理</li>
                    </ul>
                     <modal  extraClass="treeDlg" :show="showAdd" :closeCb="this.closeCb" :confirmCb="this.confirmCb" :cancelCb="this.cancelCb">
                         <span slot="title">{{title}}</span>
                         <div slot="content">
                             <div class="add-name">
                             <span class="static-tip">课程名:</span><input type="text" class="name" ref="courseName" placeholder="请输入课程名">
                             </div>
                             <div class="tip" v-show="showTip">
                                 <span class="tip-info">课程名不能为空！</span>
                             </div>
                         </div>
                     </modal>
                </div>
                
               

</template>

<style >
 .add-name .static-tip{
      display: inline-block;
      margin: 0 20px;
      height: 40px;
      line-height: 40px;
  }
  .add-name .name{
      height: 25px;
  }
  .tip{
      margin-top: 10px;
  }
  .tip-info{
      color:red;
      margin-left: 20px;
      font-size: 12px;
  }
  .treeDlg.modal .dialog div.dlg-body{
      height: 100px;
  }

</style>


<script>
import { mapGetters } from "vuex";
import modal from "../modal/modal";

export default {
  name: "tree",
  data() {
    return {
     title:"添加课程",
     showAdd:false,
     showTip:false
    };
  },
  components:{
   modal
  },
  computed: {
    ...mapGetters({
      list:"getTreeList",
      opened:"getTreeStatus"
    })
  },
  methods: {
    toggleTree(){
      this.$store.dispatch('changeTreeStatus');
      if(this.section!=0) 
      this.$store.dispatch('changeContetSection',0);
    },
    changeSection(data){
      this.$store.dispatch('changeContetSection',data);
      this.$store.dispatch('getSectionData',data);
    },
    showCourseDetail(id){
        let param={
            courseId:id
        };
    this.$store.dispatch('getCourseDetail',param);
    },
    addCourse(){
        this.showAdd=true;
    },
    closeCb(){
         this.clearDlg();
    },
    confirmCb(){
        const courseName=this.$refs.courseName.value.trim();
        if(courseName){
           this.clearDlg();
        }else{
           this.showTip=true;
        }
    },
    cancelCb(){
      this.clearDlg();
    },
    clearDlg(){
        this.showAdd=false;
        this.showTip=false;
        this.$refs.courseName.value="";
    }


  },
  mounted() {
    this.$store.dispatch('getTreeData');
  },
  watch: {

  }
};
</script>
