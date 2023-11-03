<template>
  <img class="logo" src="../assets/download.png">
<h1>Sign Up</h1>
<div class="register">
<input type="text" placeholder="Enter Name" v-model="name"/>
  <input type="text" placeholder="Enter E-Mail" v-model="email"/>
  <input type="password" placeholder="Enter Password" v-model="password"/>
  <button v-on:click="signUp()">Sign Up</button>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios'
 export default{
  name:'SignUp',
  data(){
    return{
      name:'',
      email:'',
      password:''
    }}
    ,
    methods: {
      async signUp(){
        let result= await axios.post(" http://localhost:3000/users",{email:this.email,name:this.name,password:this.password});
        console.log(result)
        if(result.status==201) {

        this.$router.push({name:'HomeComp'})
        localStorage.setItem("user-info",JSON.stringify(result.data))
        }
      }
    },
    mounted(){
      let user=localStorage.getItem("user-info")
      if(user){
         this.$router.push({ name: 'HomeComp' })
      }
    }
  }
 
</script>
<style>
 .register input{
  width:300px;
  height:30px;
  border:solid rgb(119, 168, 197) 1px;
  display:block;
  padding-left:10px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:20px;
 }
.register button{
  width:310px;
  height:40px;
  border-color:rgb(12, 162, 222) ;;
  color:white;
  cursor:pointer;
  background-color:rgb(12, 162, 222) ;
}
</style>