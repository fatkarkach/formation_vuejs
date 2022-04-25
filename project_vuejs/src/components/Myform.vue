<template>
  <h1>myform</h1>
<!--  <h1  :style="{fontSize:fontSize + 'px'}"  :class="active ? 'text-primary' : ''">my form</h1>-->
<!--<h1  :class="{'text-primary':active,'bg-warning':active}">my form</h1>-->
<!--  <p v-text="newplayers"></p>-->
<!--  <p v-html="`<h1 style='color:green'>${newplayers}</h1>`"></p>-->
<!--<div v-show="players.length>0">-->
<!--  {{players}}-->
<!--</div>-->
<!--  <div v-if="players.length > 0">-->
<!--    {{players.length}}-->
<!--  </div>-->
<!--<div v-else>-->

<!--    no playeres found-->
<!--</div>-->
<!--  <ul>-->
<!--    <li v-for= "(player,index) in players" :key="index">-->
<!--      {{player + " " + index}}-->
<!--    </li>-->
<!--  </ul>-->
<!--  <input  v-bind:value="newplayers">-->
<!--  <img :src="image">-->
<!--  @input="newplayers=$event.target.value-->
<!--  <input type="text" class="from-control"  v-model="newplayers" @keyup.enter="players.push(newplayers)">-->
<!--  <hr>-->
<!--  <ul class="list-group">-->
<!--    <li  class="list-group-item" v-for= "(player,index) in players" :key="index">-->
<!--    <div class="d-flex justify-content-between">-->
<!--      <p>{{player}}</p>-->
<!--      <button class="btn" @click="removeplayer(index)">X</button>-->
<!--    </div>-->
<!--    </li>-->
<!--  </ul>-->
<!--<button class="btn btn-primary my-2" @click="addnewplayer()">Add</button>-->
<div class="row">
  <div class="col-md-4">
<!--    <input-->
<!--      type="text"-->
<!--      class="form-control"-->
<!--      v-model="newlang"-->
<!--      @keydown.enter="langs.push(newlang)">-->
<!--    <select  v-model="type" class="form-select my-2" >-->
<!--      <option value="frontend">frontend</option>-->
<!--      <option value="backend">backend</option>-->
<!--      <option value="both"> both</option>-->
<!--    </select>-->
<!--    <p>{{message}}</p>-->
<!--  <hr>-->
<!--    <button class="btn btn-primary my-2" @click=" addlang()">Add</button>-->
<!--  add lang-->
    <AddLang @addLang="addlang($event)"></AddLang>
  </div>
    <div class="col-md-8">
<!--    <ul class="list-group">-->
<!--    <li class="list-group-item"  v-for= "(lang,index) in langs" :key="index" >-->
<!--      <div class="d-flex justify-content-between">-->
<!--        <p  class="badge" :class="typeclass(lang.type)">-->
<!--          {{lang.name}}-->
<!--        </p>-->
<!--        <button class="btn" @click=" removelang(index)">X</button>-->
<!--      </div>-->
<!--    </li>-->
<!--    </ul>-->
<!--  <hr>-->
<!--      <p>Total frontend languages : <strong> {{ frontendlangs}}</strong></p>-->
<!--lang-list-->
      <lang-List :langs="langs" @removelang="removelang($event)"></lang-List>
  </div>
</div>
</template>
<script>
import LangList from "@/components/LangList";
import AddLang from "@/components/AddLang";
export default{
name : `Myform`,
  components:{
    LangList,
    AddLang,
  },
  data ()
  {
    return{
      // players:[
      //     "fatma","housin","jannat","boutaina"
      //
      // ],
      // newplayers:"",
      // // image:"../assets/dubai.jpg"
      // active:true,
      // textcolor:'text-primary',
      // bgColor:'bg-warning',
      // fontSize:100,
      langs:[
        {name:"PHP",type:"backend"},
        {name:"JAVASCRIPT",type:"frontend"},
        {name:"NODE",type:"BOTH"},
        {name:"Python",type:"backend"},
        {name:"ASP.NET",type:"backend"},
        {name:"flutter",type:"frontend"},
        {name:"VUE",type:"frontend"},
      ],
      // newlang:"",
      // type:'frontend',
      // message:"YOU HAVE SELECTED",
    }
  },
  watch: {
 type(newVal,oldVal){
    console.log(newVal,oldVal)
   this.message="YOU HAVE SELECTED : "
   this.message=this.message+newVal
  }

  },
  // computed: {
  // // frontendlangs()
  // // {
  // //   let count=0
  // //   this.langs.map((lang) =>{
  // //     if(lang.type == 'frontend'){
  // //       count++
  // //     }
  // // })
  // //   return count
  // // }
  // },
   methods :{
  //     addnewplayer()
  //     {
  //       if(this.newplayers.length>0) {
  //         console.log("player added succefuly")
  //         this.players.push(this.newplayers)
  //         this.newplayers = ""
  //       }
  //     },
  //   removeplayer(index)
  //   {
  //     this.players.splice(index, 1)
  //
  //   }

     addlang(lang)
     {
         //console.log("player added succefuly")
                   this.langs.push({
                     name: lang.name,
                     type: lang.type,
                   });
     },
     removelang(index)
     {
       console.log(index)
       this.langs.splice(index, 1)
     },
     // typeclass(type)
     // {
     //   if(type=="backend")
     //   {
     //     return "bg-primary";
     //   }
     //   else if(type=="frontend"){
     //      return "bg-success";
     //
     //   }
     //   else {
     //     return "bg-secondary";
     //   }
     // },
  }
}
</script>
<style>

</style>