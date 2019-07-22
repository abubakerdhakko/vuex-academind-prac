<template>
<div id="product-list-one">
<h1>students</h1>
<ul>
  <li v-for="(student,index) in students" :key="student.id">
    {{student.name}}
    {{student.games.length}}
    <button @click="addTeamMember('A',index)" > Team A </button>
    <button @click="addTeamMember('B',index)" >Team B </button>
  </li>
</ul>
<hr>
<TeamComponent type='A'></TeamComponent>
<TeamComponent type='B'></TeamComponent>
  </div>
</template>
<script>
import TeamComponent from '../components/teamComponent'
import store from '../store/index'
export default {
  components: {TeamComponent},
  
  computed:{
    students () {
       return store.state.students
    } 
  },
  methods:{
    addTeamMember(type,index){
      store.dispatch("addTeamMember",{type,index});
    }
  },
  created(){
   store.dispatch("getStudents");
  }
};
</script>

<style>

</style>
