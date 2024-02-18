<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';

// manage auth if user is on a page that requires auth
</script>

<style scoped>
main {
  max-width: 620px;
  margin: 20px auto;
  padding: 0 20px;
}
</style>
