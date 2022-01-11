<template>
  <div class="bg-green-200 flex justify-center items-center h-32">
    <p>© {{ thisYear }} Events app. All rights reserved.</p>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  computed: {
    thisYear() {
      return dayjs().year();
    },
  },
};
</script>
