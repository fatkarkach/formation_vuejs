<template>
<div class="container mt-5">
  <Taskes :taskes="taskes"></Taskes>
</div>
</template>

<script>
import { ref } from 'vue';
import Taskes from './components/Taskes.vue';
export default {
  components: {
    Taskes,
  },
  setup()
  {
    const taskes=ref([
    // { id :1,title: "go to work", status:true},
    // { id :2,title: "pick my brother from school", status:true},
    // { id :3,title: "do homework", status:false},

  ]);
    const bringData =async() =>
    {
      // let response =await  fetch('http://localhost:3001/taskes')
      // console.log(response.json())
      try {
        let response =await  fetch('http://localhost:3001/taskes');
        taskes.value =  await response.json();
        }catch (e){
        console.log(e);

      }

    };
    bringData();
    return{taskes,bringData};
  }

  }
</script>

<style>
</style>
