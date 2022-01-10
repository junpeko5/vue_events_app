<template>
  <div id="app" class="flex flex-col h-screen w-screen bg-gray-100">
    <NavBar />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style></style>
