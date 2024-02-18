<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent :aria-disabled="auth.loading">
      <input :disabled="auth.loading" type="text" placeholder="Username" />
      <input :disabled="auth.loading" type="password" placeholder="Password" />
      <button :disabled="auth.loading" type="button" @click="login">Login</button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

async function login() {
  try {
    await auth.login();
    await router.push('dashboard')
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}
</style>
