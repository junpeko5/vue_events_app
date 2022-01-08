import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "@/views/EventCreate";
import EventList from "@/views/EventList";
import EventShow from "@/views/EventShow";
import NotFound from "@/components/NotFound";
import NetworkIssue from "@/views/NetworkIssue";
import store from "@/store";
import NProgress from "nprogress";

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
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("event/fetchEvent", routeTo.params.id)
        .then((event) => {
          routeTo.params.event = event;
          next();
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response && err.response.status === 404) {
            console.log("here");
            next({ name: "404", params: { resource: "イベント" } });
            return;
          }
          next({ name: "network-issue" });
        });
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
