<template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="flex-box">
<div id="nav-side" class="box" >
    <router-link  to="/allvisit" class="nav-item side">All Visit</router-link> 
    <router-link to="/employee" class="nav-item side">All Employees</router-link>
    <router-link to="/employee" class="nav-item side">Admin</router-link>
  </div>
  <router-view />

    <div class="page">
        <h1>Employees</h1>
        <table id="AdminTable">
            <tr>
                <th>Employee ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Department</th>
                <th>Actions</th>
            </tr>
            <tr v-for="item in items" v-bind:key="item._id">
                <td>{{item._id}}</td>
                <td>{{item.email}}</td>
                <td>{{item.name}}</td>
                <td>{{item.phoneNumber}}</td>
                <td>{{item.department}}</td>
                <td><button @click="deletehandler(item._id)" class="action"> <span class="glyphicon">&#xe020;</span> DELETE</button>
                <button  class="action"><span class="glyphicon">&#x270f;</span> EDIT</button></td>
            </tr>
        </table>
    </div>
  </div>  
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

export default {
    name: "Employees",
    methods: {
      deletehandler (id) {
         axios.delete(`http://localhost:3000/deleteemployee/${id}`)   
      }
    },
    data() {
        return{items: undefined}
    },
    mounted(){
        axios.get('http://localhost:3000/allemployees')
        .then((res) => {
            this.items = res.data
            console.warn(res.data)
        })
    }
    
}
</script>
<style scoped>
#AdminTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#AdminTable td, #AdminTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#AdminTable tr:nth-child(even){background-color: #f2f2f2;}

#AdminTable tr:hover {background-color: #ddd;}

#AdminTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #c96819;
  color: white;
}

#nav-side {
  list-style-type: none;
  padding-top: 100px;
  width: 200px;
  background-color: #f1f1f1;
  position: relative;
}

.side {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.5rem;
  margin: 2.5rem auto;
}

/* Change the link color on hover */
.side:hover {
  background-color: #555;
  color: white;
}

.flex-box{
  display: flex;
  position: absolute;
}
.page{
    width: 75vw;
}
.action{
    margin: 0 4px;
}
.action:hover{
  background-color: #ccc;
  height: 40px;
  display: inline;

}
</style>