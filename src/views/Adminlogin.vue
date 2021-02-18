<template>
    <div>
    <img alt="Amalitech logo" src="../assets/Amalitech.png">
    <form @submit.prevent="handlesubmit">
         <label >Email</label>
        <input type="email" required placeholder="Your email.." v-model.trim="admin.email">

         <label >Password</label>
        <input type="password" required placeholder="Enter your password.." v-model.trim="admin.password">

        <button type="submit">Log In</button>
    
    </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
        return {
                admin: {
                  email: '',
                  password:''
                  },
                error: ''
        }
    },
    methods: {
            handlesubmit() {
            this.error = this.admin.password.length > 6 ? '': 'Invalid Input' ;
            if (!this.error){
                alert(`welcome ${this.admin.email}`)
                axios.post('http://localhost:3000/admin/login', this.admin)
                this.$router.push('/allvisit')
            }
        }
    }
}
</script>