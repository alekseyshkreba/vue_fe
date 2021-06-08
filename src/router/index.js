import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '../store'
import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import Profile from "../views/User/Profile";
import PostsList from "../views/Post/List";
import PostCreate from "../views/Post/Create";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: PostsList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/post/create",
    name: "Create Post",
    component: PostCreate,
    meta: {
      requiresAuth: true
    }
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router;
