<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-start mt-4">
      <h1
        class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
      >
        {{ event.title }}
      </h1>
    </div>
    <div class="mt-4">
      <div class="border p-2 inline-block rounded bg-blue-500 text-white">
        {{ event.category }}
      </div>
    </div>
    <div class="mt-4">
      <p class="font-light">{{ event.description }}</p>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="mr-3">開催日時</div>
      <span class="">{{ eventDate }}</span>
    </div>

    <div class="flex flex-wrap mt-4">
      <BaseIcon name="map-pin" class="mr-2"></BaseIcon>
      <address class="font-extralight">{{ event.location }}</address>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import { dateTimeFormat } from "@/utils/date";
export default {
  name: "event-show",
  components: {
    BaseIcon,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    eventDate() {
      return dateTimeFormat(this.event.date);
    },
  },
};
</script>

<style scoped></style>
