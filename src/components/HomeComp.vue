<template>
  <HeaderComp/>
<h1>  Hello {{ name }}, Welcome to Home Page</h1>
<table>
  <tr id="first"><td>Name</td><td>Address</td><td>Contact</td> <td>Actions</td></tr>
  <tr v-for="i in restaurants" :key="i.id"><td>{{ i.name }}</td><td>{{ i.address }}</td><td>{{ i.contact }}</td><td><button id="one"><router-link :to="'/update/'+i.id">Update</router-link></button><button v-on:click="deleteRestro(i.id)" id="two">Delete</button></td></tr>
  
</table>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default{
  name:'HomeComp',
  components:{
    HeaderComp
  },
  data(){
    return{
      name:'',
      restaurants:[]
    }
  },
  methods:{
    async deleteRestro(id){
           let result = await axios.delete(`http://localhost:3000/restaurant/${id}`); 
           if(result.status==200){
           this.loadPage()
           }
    },
    async loadPage(){
        let user = localStorage.getItem("user-info")
      this.name = JSON.parse(user).name
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data
    }
  },
  mounted() {
    this.loadPage()
}
}
</script>
<style>
#first{
  font-weight: bold;
}
table,td{
  border:solid black 1px;
  border-collapse: collapse;
  
}
td{
  width:160px;
  height:40px;
}
#one{
  width:60px;
  height:40px;
  border-color:rgb(12, 222, 30) ;;
  color:white;
  cursor:pointer;
  background-color:rgb(12, 222, 26) ;
  margin:10px;
}
#two{
  width:60px;
  height:40px;
  border-color:rgb(222, 12, 12) ;;
  color:white;
  cursor:pointer;
  background-color:rgb(222, 12, 12) ;
  margin:10px;
}
</style>