import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "@/views/EventCreate";
import EventList from "@/views/EventList";
import EventShow from "@/views/EventShow";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true,
  },
  {
    path: "/events/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/events/:id",
    name: "event-show",
    component: EventShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
