<template>
  <div class="container"></div>
 <h1 ref="title"> Composition Api</h1>
  <p>welcom {{name}}</p>
  <button class="btn btn-primary" @click=" changeClass"> change color</button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
  const name = 'lhoussaine';
  const title =ref(null);
   const  changeClass = () =>{
    console.log(title);
    // title.value.classList.add('text-primary');
    title.value.style.color='red';
    }
  return {name, title, changeClass}
  },


  }

</script>

<style>
</style>
