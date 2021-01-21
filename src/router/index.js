import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Create from "../pages/Create.vue";
import List from "../pages/List.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: "Create",
    },
  },
  {
    path: "/list",
    name: "List",
    component: List,
    meta: {
      title: "Data List",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

  next();
})

export default router;
