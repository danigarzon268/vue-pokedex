import Vue from "vue";
import Store from "@/store";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: "default",
      title: "Inicio"
    }
  },
  {
    path: "/pokemon-list",
    name: "pokemonList",
    component: () => import("@/views/Pokemon.vue"),
    meta: {
      layout: "default",
      title: "PokeList"
    }
  },
  {
    path: "/*",
    name: "404",
    component: () => import("@/views/PageNotFound.vue"),
    meta: {
      layout: "default",
      title: "404"
    }
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
