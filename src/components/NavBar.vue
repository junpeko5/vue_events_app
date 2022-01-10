<template>
  <nav class="flex flex-row justify-between">
    <router-link :to="{ name: 'event-list' }" class="brand">
      Events App
    </router-link>
    <div>
      <router-link :to="{ name: 'event-list' }">List</router-link>
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
