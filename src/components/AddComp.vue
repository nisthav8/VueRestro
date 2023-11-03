<template>
  <HeaderComp />
  <h1>Add Restaurant</h1>
  <form class="add">
    <input type="text" placeholder="Enter Restaurant Name" name="name" v-model="restaurant.name"/>
     <input type="text" placeholder="Enter Address" name="address" v-model="restaurant.address"/>
      <input type="text" placeholder="Enter Contact" name="contact" v-model="restaurant.contact"/>
      <button type="button" v-on:click="addRestro()">Add Restaurant</button>
  </form>
</template>
<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
  name: 'AddComp',
  components: {
    HeaderComp
  },
  data(){
    return{
    restaurant:{
      name:'',
      address:'',
      contact:''
    }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info")
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
    methods: {
    async addRestro() {
      let result = await axios.post("http://localhost:3000/restaurant",{name:this.restaurant.name,address:this.restaurant.address,contact:this.restaurant.contact})
      console.log(result)
      this.$router.push({ name: 'HomeComp' })
    }
  },
}
</script>
<style>
 .add input{
  width:300px;
  height:30px;
  border:solid rgb(119, 168, 197) 1px;
  display:block;
  padding-left:10px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:20px;
 }
.add button{
  width:310px;
  height:40px;
  border-color:rgb(12, 162, 222) ;;
  color:white;
  cursor:pointer;
  background-color:rgb(12, 162, 222) ;
}
</style>