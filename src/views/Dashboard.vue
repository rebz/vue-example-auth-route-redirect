<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard</p>

    <div class="grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 32px;

  div {
    background: rgba(0,0,0,0.1);
    height: 100px;
    border-radius: 8px;
  }
}
</style>
