<template>
  <div>
    <h1>おっと。</h1>
    <h3>{{ resource }} ページが存在しません。</h3>
    <router-link :to="{ name: 'event-list' }"> ホームに戻る </router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: false,
    },
  },
};
</script>
