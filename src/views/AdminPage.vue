<template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="flex-box">
<div id="nav-side" class="box" >
    <router-link  to="/allvisit" class="nav-item side">All Visit</router-link> 
    <router-link to="/employee" class="nav-item side">All Employees</router-link>
    <router-link to="/employee" class="nav-item side">Admin</router-link>
  </div>
  <router-view />


<!-- Page Content -->
  
   <div class="box">
        <h1>All Visits</h1>
        <table id="AdminTable">
            <tr>
                <th>Visitor ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Purpose Of Visit</th>
                <th>Signed In At</th>
                <th>Signed Out At</th>
                <th>Actions</th>
            </tr>
            <tr v-for="item in items" v-bind:key="item._id">
                <td>{{item._id}}</td>
                <td>{{item.email}}</td>
                <td>{{item.name}}</td>
                <td>{{item.purpose}}</td>
                <td>{{item.signedInAt}}</td>
                <td>{{item.signedOutAt}}</td>
                <td><button class="action"> <span class="glyphicon">&#xe020;</span> DELETE</button>
                <button @click="deletehandler" class="action"><span class="glyphicon">&#x270f;</span> EDIT</button></td>


            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
   name: "Visit",
    data() {
        return{items: undefined
          }
        
    },
    mounted(){
        axios.get('http://localhost:3000/allvisitors')
        .then((res) => {
            this.items = res.data
            console.warn(res.data)
        })
    }
}
</script>

<style scoped>
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

#AdminTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#AdminTable td, #AdminTable th {
  border: 1px solid #ddd;
  padding: 8px;
  margin: auto;
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

.box{
  justify-content: space-evenly;
}

.glyphicon{
  font-size: 24px;
  display: inline-block;
}
.action:hover{
  background-color: #ccc;
  height: 40px;
  display: inline;

}
</style>