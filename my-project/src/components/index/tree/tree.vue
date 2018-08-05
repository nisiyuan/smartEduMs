<template>

                <div class="home-left-wrap fl">
                    <ul class="modules-tree">

                          <li class="module-item course" :class="{opened:opened}" > 
                               <div class="tree-item" @click="toggleTree" >
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
                        <li class="module-item" @click="changeSection(1)">教师管理</li>
                       <li class="module-item" @click="changeSection(2)">学员管理</li>
                       <li class="module-item" @click="changeSection(3)">成绩管理</li>
                    </ul>
                </div>
                
               

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "tree",
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters({
       opened:"getTreeStatus",
       section:"getSection"
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
    }

  },
  mounted() {},
  watch: {

  }
};
</script>
