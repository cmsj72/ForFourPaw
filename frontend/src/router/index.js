import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from "@/views/Main.vue";
import Shop from "@/views/Shop.vue";
import ShopDetail from "@/views/ShopDetail.vue";
import DogList from "@/views/DogList.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import Blog from "@/views/Blog.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Main,
    },

    {
      name: "Shop",
      path: "/shop",
      component: Shop,
    },

    {
      name: "ShopDetail",
      path: "/shopDetail",
      component: ShopDetail,
    },

    {
      name: "DogList",
      path: "/dogList",
      component: DogList,
    },

    {
      name: "Blog",
      path: "/blog",
      component: Blog,
    },

    {
      name: "BlogDetail",
      path: "/blogDetail",
      component: BlogDetail,
    },
  ],
});





