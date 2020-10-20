import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexAdmin from "../components/IndexAdmin"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/admin/home"
    },
    {
      path: "/admin",
      name: "",
      component: IndexAdmin,
      children: [
        {
          path: "/admin/home",
          name: "home",
          component: Home,
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue")
    }
  ]
});

export default router
