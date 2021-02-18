import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Employees from "../views/Employees.vue"
import Adminlogin from "../views/Adminlogin.vue"
import Allvisit from "../views/AdminPage"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/employee",
    name: "Employees",
    component: Employees
  },
  {
    path: "/admin",
    name: "Admin",
    component: Adminlogin
  },
  {
    path: "/allvisit",
    name: "AllVisit",
    component: Allvisit
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
