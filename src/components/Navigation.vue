<template>
  <nav>
    <router-link to="/" style="margin-right: auto;">Home</router-link>
    <router-link to="dashboard" v-show="auth.isAuthenticated">Dashboard</router-link>
    <router-link to="login" v-show="!auth.isAuthenticated">Login</router-link>
    <button @click="logout" v-show="auth.isAuthenticated">Logout</button>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

async function logout() {
  try {
    await auth.logout();
    await router.push('login')
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  a, button {
    background: none;
    border: 0;
    outline: none;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 12px;

    &:hover {
      background: skyblue;
    }

    &.active {
      background: greenyellow;
    }
  }
}
</style>
