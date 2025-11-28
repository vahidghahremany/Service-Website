import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MenuPageView from "@/views/MenuPageView.vue";
import ReservationView from "@/views/ReservationView.vue";
import ProductPageView from "@/views/ProductPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/menu", name: "menu", component: MenuPageView },
    { path: "/reservation", name: "reservation", component: ReservationView },
    { path: "/product-page/:id", name: "product-page", component: ProductPageView },
  ],
});

export default router;
