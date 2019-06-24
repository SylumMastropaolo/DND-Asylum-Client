import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/charactersheet",
      name: "charactersheet",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "charactersheet" */ "./views/CharacterSheet.vue");
      }
    },
    {
      path: "/compendium",
      name: "compendium",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "compendium" */ "./views/Compendium.vue");
      }
    }
  ]
});
