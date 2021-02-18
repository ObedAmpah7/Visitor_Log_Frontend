<template>
<div>
    <img alt="Amalitech logo" src="../assets/Amalitech.png">
    <form @submit.prevent="handlesubmit">
        <label >Name</label>
        <input type="text" placeholder="Your name.." required v-model.trim="visitor.name">
        <div v-if="error" class="error">{{ error}}</div>

        <label >Email</label>
        <input type="email" placeholder="Your email.." v-model.trim="visitor.email">

        <label >Telphone Number</label>
        <input type="tel" placeholder="Your telephone number.." required v-model.trim="visitor.phoneNumber">

        <!-- <label >Host</label>
        <select v-model="visitor.host" placeholder="Who are you visiting...">
        <option value="John">John</option>
        <option value="Patrick">Patrick</option>
        <option value="Jame">Jame</option>
        </select> -->

        <label >Purpose</label>
        <input type="text" placeholder="Kindly state the purpose of your visit.." required v-model.trim="visitor.purpose">
        <div v-if="error" class="error">{{ error}}</div>
    
        <button type="submit">Sign In</button>
    </form>
</div>
</template>

<script>
// import vueaxios from 'vue-axios'
import axios from 'axios'

export default {
    data() {
        return {
                visitor: {
                  name:'',
                  email: '',
                  phoneNumber:'',
                  // host:'',
                  purpose:''
                  },
                error: ''
        }
    },
    methods: {
            handlesubmit() {
            this.error = this.visitor.name.length > 3 ? '': 'Invalid Input' ;
            if (!this.error){
                console.log(this.visitor.name, this.visitor.email, this.visitor.phoneNumber, this.visitor.purpose)
                axios.post('http://localhost:3000/visitorsignin', this.visitor)
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>
input[type=text],
 select,
 input[type=tel],
 input[type=email],
  input[type=password]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 30%;
  background-color:  #d86010;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color:  #a54403;
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

label{
  font-weight: bold;
}

</style>