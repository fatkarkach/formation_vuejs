<template>
<h1>about page</h1>
  <h3> your number is {{num}}</h3>
</template>
<script>
export default{
  name: `About`,
  data(){
    return {
      num: this.$route.query.id,

    }
  }
}
</script>
<style>

</style>
