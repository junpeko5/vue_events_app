<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-2">
      <EventCard v-for="event in events" :event="event" :key="event.id" />
    </div>
    <div class="flex justify-center gap-2 my-2">
      <template v-if="page !== 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          class="cursor-pointer hover:text-blue-300 border rounded-lg p-2 shadow"
        >
          Prev Page
        </router-link>
      </template>
      <router-link
        v-if="hasNextPage"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        class="cursor-pointer hover:text-blue-300 border rounded-lg p-2 shadow"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import store from "@/store/index";

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  store
    .dispatch("event/fetchEvents", {
      page: currentPage,
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    })
    .catch(() => {
      next({ name: "network-issue" });
    });
}
export default {
  name: "event-list",
  components: {
    EventCard,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    hasNextPage() {
      return (
        store.state.event.eventsTotal > this.page * store.state.event.perPage
      );
    },
    events() {
      return store.state.event.events;
    },
  },
};
</script>
