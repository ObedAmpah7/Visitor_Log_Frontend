<template>
  <h1>WELCOME TO</h1>
  <img alt="Amalitech logo" src="../assets/Amalitech.png">
  <h1>VISITOR'S LOG</h1>
 <router-link to="/about" class="btn">Click Here To Proceed</router-link>
</template>

<script>
export default {

}
</script>

<style scoped>

h1{
    padding: 1rem 0;
    font-weight: bold;
}

.btn {
  background-color: #d86010; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 1rem;
}

.btn:active,
.btn:hover,
.btn:focus {
background-color: white;
color:  #d86010;
outline: 0;
}



</style>
