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
                                <li class="course-item addcourse">添加课程   +</li>
                            </ul>
                           </li>
                        <li class="module-item" @click="changeSection(1)">教师管理</li>
                       <li class="module-item" @click="changeSection(2)">学员管理</li>
                       <li class="module-item" @click="changeSection(3)">成绩管理</li>
                    </ul>
                     <modal>
                         <div slot="title">{{title}}</div>
                         <div slot="content">312321313</div>
                     </modal>
                </div>
                
               

</template>

<script>
import { mapGetters } from "vuex";
import modal from "../modal/modal";

export default {
  name: "tree",
  data() {
    return {
     title:"添加课程"
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
    }


  },
  mounted() {
    this.$store.dispatch('getTreeData');
  },
  watch: {

  }
};
</script>
