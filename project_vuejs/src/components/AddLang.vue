<template>
  <input
      type="text"
      class="form-control"
      v-model="newlang">
<!--      @keydown.enter="langs.push(newlang)">-->
  <select  v-model="type" class="form-select my-2" >
    <option value="frontend">frontend</option>
    <option value="backend">backend</option>
    <option value="both"> both</option>
  </select>
  <p>{{message}}</p>
  <hr>
  <button class="btn btn-primary my-2" @click="addLang()">Add</button>
</template>
<script>
export default{
  data(){
    return{
      newlang:"",
      type:'frontend',
      message:"YOU HAVE SELECTED",
    }
  },
  methods: {
    addLang(){
      this.$emit('addLang',{name:this.newlang, type:this.type})
      this.newlang="";
    }
  }

}

</script>
<style>

</style>