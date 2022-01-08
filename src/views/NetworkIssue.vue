<template>
  <div>
    <h1>接続エラー</h1>
    <h3>
      ネットワーク接続に問題があります。戻るボタンを押していただくか、または、少し時間を置いて再度お試しください。
    </h3>
    <router-link :to="{ name: 'event-list' }">トップページに戻る</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
