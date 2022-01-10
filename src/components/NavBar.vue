<template>
  <div class="bg-green-200">
    <nav class="flex justify-between container mx-auto p-4">
      <router-link
        :to="{ name: 'event-list' }"
        class="cursor-pointer hover:text-blue-300"
      >
        Events App
      </router-link>
      <div>
        <router-link
          :to="{ name: 'event-list' }"
          class="mr-4 cursor-pointer hover:text-blue-300"
        >
          List
        </router-link>
        <router-link
          :to="{ name: 'event-create' }"
          class="cursor-pointer hover:text-blue-300"
        >
          Create
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
