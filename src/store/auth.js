import { defineStore, acceptHMRUpdate } from 'pinia';
import { useStorage } from '@vueuse/core';
import { delay } from '@/utilities/delay';
import { ref } from 'vue';

/**
 * Instead of using a timeout to
 * fake a request, replace with
 * your actual login logic.
 */
export const useAuthStore = defineStore('auth', () => {

  const loading = ref(false);

  /**
   * The useStorage function is only here to serve as an
   * example for maintaining auth state when refreshing
   * the browser. You will notice an "auth" key in
   * your localStorage settings.
   */
  const isAuthenticated = useStorage('auth', false);

  async function login() {
    try {
      loading.value = true;
      await delay(3000);
      isAuthenticated.value = true;
    } catch(error) {
      throw error
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    try {
      loading.value = true;
      await delay(300)
      isAuthenticated.value = false;
    } catch (error) {
      throw error
    } finally {
      loading.value = false;
    }
  }

  return {
    isAuthenticated,
    loading,
    user,
    login,
    logout,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
