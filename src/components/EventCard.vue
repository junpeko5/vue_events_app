<template>
  <div class="mt-4">
    <router-link
      class="cursor-pointer"
      :to="{ name: 'event-show', params: { id: event.id } }"
    >
      <div
        class="p-4 shadow hover:shadow-lg bg-white font-extralight transition-all"
      >
        <span class="eyebrow">{{ eventDate }}</span>
        <h4>{{ event.title }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/utils/date";
export default {
  props: {
    event: Object,
  },
  computed: {
    eventDate() {
      return dateTimeFormat(this.event.date);
    },
  },
};
</script>

<style scoped></style>
