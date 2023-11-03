<template>
  <HeaderComp />
  <h1>Update Restaurant</h1>
   <form class="update">
      <input type="text" placeholder="Enter Restaurant Name" name="name" v-model="restaurant.name"/>
       <input type="text" placeholder="Enter Address" name="address" v-model="restaurant.address"/>
        <input type="text" placeholder="Enter Contact" name="contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="updateRestro()">Update Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'
export default {
  name: 'UpdateComp',
  components: {
    HeaderComp
  },
    data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods:{
    async updateRestro(){
        const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,
         { name: this.restaurant.name, address: this.restaurant.address, contact: this.restaurant.contact }
        )
       console.log(result)
       if(result.status==200)
       this.$router.push({name:'HomeComp'})
    }
  },
   async mounted() {
    let user = localStorage.getItem("user-info")
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    //console.log(this.$route.params.id)
     const result=await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
     console.log(result)
     this.restaurant=result.data
  }
}
</script>
<style>
.update input {
  width: 300px;
  height: 30px;
  border: solid rgb(119, 168, 197) 1px;
  display: block;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.update button {
  width: 310px;
  height: 40px;
  border-color: rgb(12, 162, 222);
  ;
  color: white;
  cursor: pointer;
  background-color: rgb(12, 162, 222);
}
</style>