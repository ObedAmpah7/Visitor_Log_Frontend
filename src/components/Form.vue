<template>
    

<div>
    <img alt="Amalitech logo" src="../assets/Amalitech.png">
    <form @submit.prevent="handlesubmit">
        <label >Name</label>
        <input type="text" placeholder="Your name.." required v-model.trim="name">
        <div v-if="error" class="error">{{ error}}</div>

        <label >Email</label>
        <input type="email" placeholder="Your email.." v-model.trim="email">

        <label >Telphone Number</label>
        <input type="tel" placeholder="Your telephone number.." required v-model.trim="tel">

        <label >Host</label>
        <select v-model="host">
        <option value="John">John</option>
        <option value="Patrick">Patrick</option>
        <option value="Jame">Jame</option>
        </select>
    
        <button type="submit">Sign In</button>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
                name:'',
                email: '',
                tel:'',
                host:'',
                error: ''
        }
    },
    methods: {
            handlesubmit() {
            this.error = this.name.length > 3 ? '': 'Invalid Input' ;
            if (!this.error){
                console.log(this.name, this.email, this.tel, this.host) 
            }
        }
    }
}
</script>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>