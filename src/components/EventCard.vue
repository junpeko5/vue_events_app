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
        <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
        <span></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import { dateTimeFormat } from "@/utils/date";
export default {
  components: {
    BaseIcon,
  },
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
