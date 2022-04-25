<template>
      <ul class="list-group">
      <li class="list-group-item"  v-for= "(lang,index) in langs" :key="index" >
        <div class="d-flex justify-content-between">
          <p  class="badge" :class="typeclass(lang.type)">
            {{lang.name}}
          </p>
          <button class="btn" @click="$emit('removelang',index)">X</button>
        </div>
      </li>
      </ul>
    <hr>
        <p>Total frontend languages : <strong> {{ frontendlangs}}</strong></p>
</template>
<script>
export default{
  emits:["removelang"],
  props:{
    // ["langs"],
    langs:{
      type:Array,
      // required:true,
      // default:[],

    },


  },
  data(){
    return{
      // langs:[
      //   {name:"PHP",type:"backend"},
      //   {name:"JAVASCRIPT",type:"frontend"},
      //   {name:"NODE",type:"BOTH"},
      //   {name:"Python",type:"backend"},
      //   {name:"ASP.NET",type:"backend"},
      //   {name:"flutter",type:"frontend"},
      //   {name:"VUE",type:"frontend"},
      // ],
    }
  },
  computed: {
    frontendlangs() {
      let count = 0
      if(this.langs) {
        this.langs.map((lang) => {
          if (lang.type == 'frontend') {
            count++
          }
        });
      }
      return count;
    }
  },

  methods: {
    typeclass(type)
    {
      if(type=="backend")
      {
        return "bg-primary";
      }
      else if(type=="frontend"){
        return "bg-success";

      }
      else {
        return "bg-secondary";
      }
    },
  }


}
</script>
<style>

</style>