<template>
<div>
  <div class="alert" :class="headcolor" role="alert">
    Head index
  </div>
  <input type="text" class="form-control" v-model="temp">
  <input type="text" class="form-control" disabled v-model="converttof">
  <button class="btn btn-primary my-2"  @click.prevent="chekheat"> check heat</button>
</div>
</template>
<script>
import {computed, ref, watch, watchEffect} from 'vue'
export default{
  name: `Headindex`,
  setup() {
    const  temp=ref(25);
    watch(temp ,(newVal,oldVal)=>{
      console.log(newVal,oldVal);
    })
    watchEffect( () =>{
      console.log("watch effected");
    })
    const converttof = computed( () =>{
      return (temp.value*9/5)+32;
    });
    const headcolor=ref("alert-success");
    // const form=reactive({
    //   email:"",
    //   password:"",
    // });
     const chekheat =() =>{
       // form.email="lhoussaine@gmail.com";
       // form.password="1234";
      let val =temp.value;
      if(val>40){
        headcolor.value ="alert-danger"
      }else if(val>20){
        headcolor.value ="alert-success"
      }else {
        headcolor.value ="alert-info"
      }


    }
    return{temp,headcolor,chekheat,converttof};
  },
}

</script>
<style>

</style>