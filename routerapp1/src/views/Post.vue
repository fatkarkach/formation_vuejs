<template>
  <h1>{{$route.params}}</h1>
</template>
<script>
export default{
  name: `User`,
  created() {
    console.log("monted created")
  },
   beforeMount() {
    console.log("befor started")
  },
  Mounted() {
    console.log("monted started")
  }

}
</script>
<style>

</style>