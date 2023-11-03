<template>
<div class="nav">
  <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
      <a v-on:click="logOut()">Logout</a>
</div>
</template>
<script>
export default{
  name:'HeaderComp',
  methods:{
    logOut(){
   localStorage.clear();
   this.$router.push({name:'LogIn'})
    }
  }
}
</script>
<style>
.nav{
  background-color:#333 ;
  overflow:hidden;
}
body{
  padding:0;
  margin:0;
}
.nav a{
float:left;
  color:white;
  text-align:center;
  padding:16px 14px;
  font-size: 16px;
  margin-right:4px;
}
.nav a:hover{
  background-color:#ddd;
  color:#222;
}
</style>