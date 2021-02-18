<template>
  <div id="nav">
    <router-link  to="/" class="nav-item">Home</router-link> 
    <router-link to="/admin" class="nav-item">Admin</router-link>
    <router-link to="/employee" class="nav-item">Employee</router-link>
  </div>
  <router-view />
</template>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  background-color: #d86010;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 1rem;
  margin: auto;
}

#nav a.router-link-exact-active {
background-color: white;
color:   #d86010;
outline: 0;
}
</style>
