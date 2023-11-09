<template>
<img class="logo" src="../assets/download.png">
<h1>Login</h1>
<div class="login">
  <input type="text" placeholder="Enter E-Mail" v-model="email" />
  <input type="password" placeholder="Enter Password" v-model="password" />
  <button v-on:click="logIn()">Login</button>
  <p>
    <router-link to="/signup">Sign Up</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async logIn() {
      let result = await axios.get(`http://localhost:3000/users/?email=${this.email}&password=${this.password}`)

      console.log("login",result);
       if (result.data.length==0 || result.data[0].email === '' || result.data[0].password === '') {
        this.$router.push({ name: 'LogIn' })
      }
       else if (result.status == 200) {

       
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
         this.$router.push({ name: 'HomeComp' })
      }
    }
  },
   mounted() {
    let user = localStorage.getItem("user-info")
  
   if (user) {
      this.$router.push({ name: 'HomeComp' })
    }
   
  }
}
</script>

<style>
.login input {
  width: 300px;
  height: 30px;
  border: solid rgb(119, 168, 197) 1px;
  display: block;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.login button {
  width: 310px;
  height: 40px;
  border-color: rgb(12, 162, 222);
  ;
  color: white;
  cursor: pointer;
  background-color: rgb(12, 162, 222);
}
</style>
