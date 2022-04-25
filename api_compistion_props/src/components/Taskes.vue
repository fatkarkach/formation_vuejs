<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="task in taskes" :key="task.id">{{task.title}}</li>
  </ul>
  <hr>
  completed Tasks={{completedTasks}}
</template>
<script>
import {computed} from 'vue';
export default{
  name: `Taskes`,
  props: {taskes:Array},
  setup(props){
    const completedTasks=computed( () =>{
      let count=0;
      props.taskes.map((task)=>{
        if(task.status)
        {
          count++;

        }
      })
      return count;
    });
    return {completedTasks,props};

  }
}

</script>
<style>

</style>