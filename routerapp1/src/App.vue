<template>
<h1>main App</h1>
  <router-link :to="{name:'About',query:{id:10}}">about</router-link>
  <router-link :to="{name:'Home' , params:{name:'lhoussaine'}}" class="mx-2">home</router-link>
  <button class="btn btn-primary" @click="move()"> Move to about page</button>
  <router-view></router-view>
</template>
<script>
export default{
  methods:{
    move(){
      this.$router.push({name:'About'});
    }
    }
};

</script>
<style>

</style>